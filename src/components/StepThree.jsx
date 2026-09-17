function StepThree({ register, errors, getValues }) {
  const data = getValues();

  const packageNames = {
    frontend: "Frontend Developer",
    backend: "Backend Developer",
    fullstack: "Fullstack Developer",
  };

  const sessionNames = {
    pagi: "Sesi Pagi (09.00 - 12.00 WIB)",
    sore: "Sesi Sore (16.00 - 19.00 WIB)",
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          Konfirmasi & Persetujuan
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Periksa kembali data sebelum melakukan pendaftaran.
        </p>
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <h3 className="mb-4 font-bold text-gray-800">
          Ringkasan Data
        </h3>

        <div className="space-y-3 text-sm">
          <div>
            <p className="text-gray-500">Nama Lengkap</p>
            <p className="font-medium text-gray-800">
              {data.fullName || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Email Aktif</p>
            <p className="font-medium text-gray-800">
              {data.email || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Nomor WhatsApp</p>
            <p className="font-medium text-gray-800">
              {data.phone || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Paket Belajar</p>
            <p className="font-medium text-gray-800">
              {packageNames[data.package] || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Sesi Belajar</p>
            <p className="font-medium text-gray-800">
              {sessionNames[data.session] || "-"}
            </p>
          </div>
        </div>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            {...register("isAgreed", {
              required:
                "Anda harus menyetujui syarat dan ketentuan yang berlaku.",
            })}
            className="mt-1 h-4 w-4"
          />

          <span className="text-sm text-gray-700">
            Saya menyetujui syarat dan ketentuan yang berlaku.
          </span>
        </label>

        {errors.isAgreed && (
          <p className="mt-1 text-sm text-red-500">
            {errors.isAgreed.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default StepThree;   