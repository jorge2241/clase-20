import { useState } from "react";

function Messages() {
    const [messages, setMessages] = useState([]);
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (content.trim() === "") {
            setError("Debe escribir un mensaje");
            return;
        }

        if (content.includes("Voldermort")) {
            setError("No se permite usar la palabra Voldermort");
            return;
        }

        setMessages([...messages, content]);
        setContent("");
        setError("");
    };

    return (
        <div>
            <h2>Formulario de mensajes</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="content">
                        Contenido del mensaje:
                    </label>

                    <textarea
                        id="content"
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                {error && <p>{error}</p>}

                <button type="submit">
                    Enviar mensaje
                </button>
            </form>

            <h2>Mensajes</h2>

            {messages.length === 0 ? (
                <span>Aún no hay mensajes</span>
            ) : (
                messages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))
            )}
        </div>
    );
}

export default Messages;