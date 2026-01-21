import { contactMessageSchema } from "../src/utils/zodSchemas";

describe("contactMessageSchema", () => {
  it("valida un mensaje correcto", () => {
    const result = contactMessageSchema.safeParse({
      name: "Juan Pérez",
      email: "juan@example.com",
      message: "Hola, este es un mensaje de prueba.",
    });
    expect(result.success).toBe(true);
  });

  it("falla si falta el nombre", () => {
    const result = contactMessageSchema.safeParse({
      name: "",
      email: "juan@example.com",
      message: "Mensaje",
    });
    expect(result.success).toBe(false);
  });

  it("falla si el email es inválido", () => {
    const result = contactMessageSchema.safeParse({
      name: "Juan",
      email: "no-es-email",
      message: "Mensaje",
    });
    expect(result.success).toBe(false);
  });

  it("falla si falta el mensaje", () => {
    const result = contactMessageSchema.safeParse({
      name: "Juan",
      email: "juan@example.com",
      message: "",
    });
    expect(result.success).toBe(false);
  });
});
