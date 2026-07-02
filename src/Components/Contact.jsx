import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitContactAPI } from "../services/api";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");
    try {
      const response = await submitContactAPI(data);
      if (response && response.success) {
        setSuccessMsg(
          "Your message was sent successfully! I will get back to you soon.",
        );
        reset();
      } else {
        setErrorMsg(
          response.message || "Something went wrong. Please try again.",
        );
      }
    } catch (err) {
      console.error("Contact error:", err);
      const backendErr =
        err.response?.data?.message || err.response?.data?.errors?.[0]?.message;
      setErrorMsg(
        backendErr || "Unable to submit form. Server might be offline.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0F19] text-gray-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="md:flex md:gap-12 items-start">
          {/* Info Details */}
          <div className="md:w-1/3 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
              Get in Touch
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded mb-6"></div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Have an idea, project, or full-time position you want to discuss?
              Send a message and let's coordinate.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <span className="font-semibold text-white">Email:</span>
                <p className="text-indigo-400">kaliyaniamit705@gmail.com</p>
              </div>
              <div>
                <span className="font-semibold text-white">Location:</span>
                <p>Surat, Gujarat</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {successMsg && (
                <div className="bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-sm p-4 rounded-md">
                  {successMsg}
                </div>
              )}

              {errorMsg && (
                <div className="bg-rose-950/80 border border-rose-900 text-rose-300 text-sm p-4 rounded-md">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="bg-[#111827] border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 p-2.5 rounded-md text-sm outline-none transition-all text-white placeholder-gray-500"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="text-rose-400 text-xs mt-1 font-medium">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="bg-[#111827] border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 p-2.5 rounded-md text-sm outline-none transition-all text-white placeholder-gray-500"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-rose-400 text-xs mt-1 font-medium">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Inquiry / Feedback / Hiring"
                  className="bg-[#111827] border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 p-2.5 rounded-md text-sm outline-none transition-all text-white placeholder-gray-500"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <span className="text-rose-400 text-xs mt-1 font-medium">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message details..."
                  rows="5"
                  className="bg-[#111827] border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 p-2.5 rounded-md text-sm outline-none transition-all text-white placeholder-gray-500 resize-none"
                  {...register("message", {
                    required: "Message content is required",
                  })}
                />
                {errors.message && (
                  <span className="text-rose-400 text-xs mt-1 font-medium">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2.5 px-6 rounded-md transition-colors shadow-md disabled:opacity-75 cursor-pointer"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
