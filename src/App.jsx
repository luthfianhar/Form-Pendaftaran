import { useState } from "react";
import { useForm } from "react-hook-form";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      package: "",
      session: "",
      isAgreed: false,
    },
  });

  const nextStep = async () => {
    let fields = [];

    if (currentStep === 1) {
      fields = ["fullName", "email", "phone"];
    }

    if (currentStep === 2) {
      fields = ["package", "session"];
    }

    const isValid = await trigger(fields);

    if (isValid) {
      setCurrentStep((step) => step + 1);
    }
  };

  const previousStep = () => {
    setCurrentStep((step) => step - 1);
  };

  const onSubmit = (data) => {
    console.log("Data pendaftaran:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow">
          <div className="mb-4 text-5xl">✓</div>

          <h1 className="text-2xl font-bold text-gray-800">
            Pendaftaran Berhasil!
          </h1>

          <p className="mt-2 text-gray-500">
            Terima kasih sudah mendaftar event.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Kembali ke Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Form Pendaftaran Event
          </h1>

          <p className="mt-2 text-gray-500">
            Daftarkan diri kamu untuk mengikuti event belajar.
          </p>
        </div>

        <div className="mb-6 flex items-center justify-center gap-2">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center gap-2">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full font-bold ${
                  currentStep >= step
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>

              {step !== 3 && (
                <div
                  className={`h-1 w-8 rounded ${
                    currentStep > step
                      ? "bg-blue-600"
                      : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-xl bg-white p-6 shadow-md"
        >
          {currentStep === 1 && (
            <StepOne
              register={register}
              errors={errors}
            />
          )}

          {currentStep === 2 && (
            <StepTwo
              register={register}
              errors={errors}
            />
          )}

          {currentStep === 3 && (
            <StepThree
              register={register}
              errors={errors}
              getValues={getValues}
            />
          )}

          <div className="mt-8 flex justify-between gap-3">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={previousStep}
                className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50"
              >
                Kembali
              </button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
              >
                Lanjut
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
              >
                Daftar Sekarang
              </button>
            )}
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Langkah {currentStep} dari 3
        </p>
      </div>
    </div>
  );
}

export default App;