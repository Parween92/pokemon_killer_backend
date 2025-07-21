class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message); // Nachricht vom normalen Error übernehmen
    this.statusCode = statusCode; // dann eigenen Statuscode speichern
  }

  //Fehlerinfos als Objekt zurückgeben
  toJSON() {
    return {
      message: this.message,
      statusCode: this.statusCode,
      name: this.name,
    };
  }
}

export default ErrorResponse;
