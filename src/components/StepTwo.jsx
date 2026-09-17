function StepTwo({ register, errors }) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          Pilihan Kursus & Jadwal
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Pilih paket belajar dan sesi yang kamu inginkan.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Pilih Paket Belajar
        </label>

        <select
          {...register("package", {
            required: "Silakan pilih salah satu paket belajar.",
          })}
          className={`w-full rounded-lg border bg-white px-4 py-3 outline-none ${
            errors.package
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        >
          <option value="">-- Pilih Paket --</option>
          <option value="frontend">
            Frontend Developer (Rp 500.000)
          </option>
          <option value="backend">
            Backend Developer (Rp 500.000)
          </option>
          <option value="fullstack">
            Fullstack Developer (Rp 900.000)
          </option>
        </select>

        {errors.package && (
          <p className="mt-1 text-sm text-red-500">
            {errors.package.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium text-gray-700">
          Pilih Sesi Belajar
        </label>

        <div className="space-y-3">
          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 p-4">
            <input
              type="radio"
              value="pagi"
              {...register("session", {
                required: "Pilih salah satu sesi belajar.",
              })}
              className="h-4 w-4"
            />

            <div>
              <p className="font-medium text-gray-800">
                Sesi Pagi
              </p>
              <p className="text-sm text-gray-500">
                09.00 - 12.00 WIB
              </p>
            </div>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 p-4">
            <input
              type="radio"
              value="sore"
              {...register("session", {
                required: "Pilih salah satu sesi belajar.",
              })}
              className="h-4 w-4"
            />

            <div>
              <p className="font-medium text-gray-800">
                Sesi Sore
              </p>
              <p className="text-sm text-gray-500">
                16.00 - 19.00 WIB
              </p>
            </div>
          </label>
        </div>

        {errors.session && (
          <p className="mt-1 text-sm text-red-500">
            {errors.session.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default StepTwo;