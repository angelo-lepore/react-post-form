// Importiamo gli hook di React necessari
import { useState, useEffect } from "react";

// Importa gli stili di Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Componente principale dell'app
function App() {
  // Stato iniziale del form
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  // Funzione chiamata quando l'utente invia il form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Dati inviati:", formData);

    try {
      // Invia i dati del form tramite POST all'API
      const response = await fetch(
        "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts",
        {
          method: "POST", // Metodo HTTP POST
          headers: { "Content-Type": "application/json" }, // Indichiamo che i dati sono in formato JSON
          body: JSON.stringify(formData), // Convertiamo l'oggetto in stringa JSON
        }
      );
      // Convertiamo la risposta dell'API in formato JSON
      const data = await response.json();
      // Stampiamo la risposta dell'API (conferma che l'invio è riuscito)
      console.log("✅ Risposta del server:", data);
    } catch (error) {
      // Se qualcosa va storto, lo stampiamo in console
      console.error("❌ Errore durante l'invio dei dati:", error);
    }
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <form onSubmit={handleSubmit}>
            {/* Titolo del form */}
            <div>
              <h1 className="text-center mb-4">Invio dati ad un API</h1>
            </div>

            {/* Campo AUTORE */}
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Autore
              </label>
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                placeholder="Inserisci nome autore"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
              />
            </div>

            {/* Campo TITOLO */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Titolo
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Inserisci il titolo"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>

            {/* Campo TESTO */}
            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Testo
              </label>
              <textarea
                className="form-control"
                id="body"
                name="body"
                rows="4"
                placeholder="Scrivi una breve trama"
                value={formData.body}
                onChange={(e) =>
                  setFormData({ ...formData, body: e.target.value })
                }
              ></textarea>
            </div>

            {/* Campo CHECKBOX (Pubblica libro) */}
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="public"
                name="public"
                checked={formData.public}
                onChange={(e) =>
                  setFormData({ ...formData, public: e.target.checked })
                }
              />
              <label className="form-check-label" htmlFor="public">
                Pubblica libro
              </label>
            </div>

            {/* Pulsante per inviare il form */}
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
