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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="md:flex md:gap-12 items-start">
          {/* Info Details */}
          <div className="md:w-1/3 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
              Get in Touch
            </h2>
            <div className="h-1 w-12 bg-blue-600 rounded mb-6"></div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Have an idea, project, or full-time position you want to discuss?
              Send a message and let s coordinate.
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <span className="font-semibold text-gray-900">Email:</span>
                <p className="text-blue-600">kaliyaniamit705@gmail.com</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Location:</span>
                <p>Surat, Gujarat</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {successMsg && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm p-4 rounded-md">
                  {successMsg}
                </div>
              )}

              {errorMsg && (
                <div className="bg-rose-50 border border-rose-200 text-rose-800 text-sm p-4 rounded-md">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2.5 rounded-md text-sm outline-none transition-all text-gray-900"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="text-rose-600 text-xs mt-1 font-medium">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2.5 rounded-md text-sm outline-none transition-all text-gray-900"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-rose-600 text-xs mt-1 font-medium">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Inquiry / Feedback / Hiring"
                  className="border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2.5 rounded-md text-sm outline-none transition-all text-gray-900"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <span className="text-rose-600 text-xs mt-1 font-medium">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message details..."
                  rows="5"
                  className="border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2.5 rounded-md text-sm outline-none transition-all text-gray-900 resize-none"
                  {...register("message", {
                    required: "Message content is required",
                  })}
                />
                {errors.message && (
                  <span className="text-rose-600 text-xs mt-1 font-medium">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 px-6 rounded-md transition-colors shadow-sm disabled:opacity-75 cursor-pointer"
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
