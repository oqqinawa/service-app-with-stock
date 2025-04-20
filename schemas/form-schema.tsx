import { z } from "zod"

// Skema validasi untuk pengguna
const formUserSchema = z.object({
  username: z.string().min(3, "Username harus memiliki minimal 3 karakter."),
  email: z.string().email("Email tidak valid."),
  password: z.string().min(6, "Password harus memiliki minimal 6 karakter."),
  confirmPassword: z.string(),
})

// Skema validasi untuk pendaftaran
const formRegisterSchema = z.object({
  name: z.string().min(1, "Nama harus diisi."),
  email: z.string().email("Email tidak valid."),
  password: z.string().min(6, "Password harus memiliki minimal 6 karakter."),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "Anda harus setuju dengan syarat dan ketentuan.",
  }),
})

// Skema validasi untuk layanan
const formServiceSchema = z.object({
  name: z.string().min(1, "Nama Pemilik Barang harus diisi."),
  jenis: z.string().nonempty("Jenis Barang harus dipilih."),
  merk: z.string().nonempty("Merk Barang harus dipilih."),
  model: z.string().min(1, "Model/Seri harus diisi."),
  serial: z.string().min(1, "S/N harus diisi."),
  kelengkapan: z.string().optional(),
  kerusakan: z.string().min(1, "Kerusakan harus diisi."),
  dp: z.string().optional(),
  penerima: z.string().min(1, "Nama Penerima harus diisi."),
  date: z.date().optional(),
  agreement: z.boolean().refine((val) => val === true, {
    message: "Anda harus setuju untuk melanjutkan.",
  }),
})

// Skema untuk supplier
const formSupplierSchema = z.object({
  nama_supplier: z.string().min(1, "Nama Supplier harus diisi."),
  alamat_supplier: z.string().min(1, "Alamat Supplier harus diisi."),
  nomor_telepon: z.string().min(1, "Nomor Telepon harus diisi."),
  kategori_produk: z.string(),
})

// Tipe untuk data form
export type UserFormData = z.infer<typeof formUserSchema>
export type RegisterFormData = z.infer<typeof formRegisterSchema>
export type ServiceFormData = z.infer<typeof formServiceSchema>
export type SupplierFormData = z.infer<typeof formSupplierSchema>

export {
  formUserSchema,
  formRegisterSchema,
  formServiceSchema,
  formSupplierSchema,
}
