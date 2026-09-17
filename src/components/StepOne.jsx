function StepOne({ register, errors }) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          Informasi Pribadi
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Isi data diri kamu untuk mendaftar event.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Nama Lengkap
        </label>

        <input
          type="text"
          placeholder="Masukkan nama lengkap"
          {...register("fullName", {
            required: "Nama lengkap wajib diisi.",
            minLength: {
              value: 3,
              message: "Nama lengkap minimal 3 karakter.",
            },
          })}
          className={`w-full rounded-lg border px-4 py-3 outline-none ${
            errors.fullName
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />

        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email Aktif
        </label>

        <input
          type="email"
          placeholder="contoh@email.com"
          {...register("email", {
            required: "Email wajib diisi.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Format email tidak valid.",
            },
          })}
          className={`w-full rounded-lg border px-4 py-3 outline-none ${
            errors.email
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Nomor WhatsApp
        </label>

        <input
          type="tel"
          placeholder="08xxxxxxxxxx"
          {...register("phone", {
            required: "Nomor WhatsApp wajib diisi.",
            pattern: {
              value: /^[0-9]{10,13}$/,
              message:
                "Nomor WhatsApp harus berupa angka dan bernilai 10-13 digit.",
            },
          })}
          className={`w-full rounded-lg border px-4 py-3 outline-none ${
            errors.phone
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />

        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default StepOne;