import { useState, useEffect } from "react";

// Importa gli stili di Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <form>
            <div>
              <h1 className="text-center mb-4">Post Form</h1>
            </div>

            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Autore
              </label>
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Titolo
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Testo
              </label>
              <textarea
                className="form-control"
                id="body"
                name="body"
                rows="4"
              ></textarea>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="public"
                name="public"
              />
              <label className="form-check-label" htmlFor="public">
                Pubblica post
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Invia
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
