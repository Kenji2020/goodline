import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      // https://www.emailjs.com/
      emailjs
        .send(
          "service_d8pmvg8", // service id
          "template_abc3w0u", // template id
          mailData,
          "41kFLTaeUJne4klBY" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <div className="edrea_tm_section hidden animated" id="contact">
      <div className="section_inner">
        <div className="edrea_tm_contact">
          <div className="edrea_tm_main_title">
            <h3>
              Trabaja con <span className="coloring">nosotros</span>
            </h3>
          </div>
          <div className="wrapper">
            <div className="left">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href="#">+56 9 57005236</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                    <a href="mailto:goodsitechile@gmail.com">goodsitechile@gmail.com</a>
                    </span>
                  </div>
                </li>
                
              </ul>
            </div>
            <div className="right">
              <div className="fields">
                <form
                  className="contact_form"
                  id="contact_form"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div
                    className="returnmessage"
                    data-success="Tu mensaje fue recibido con ??xito."
                  />
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Por favor llena los campos correctamente"
                        : "Tu mensaje fue recibido con ??xito."}
                    </span>
                  </div>
                  <div className="first">
                    <ul>
                      <li>
                        <div className="list_inner">
                          <input
                            id="name"
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            onChange={(e) => onChange(e)}
                            value={name}
                          />
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <input
                            id="email"
                            type="email"
                            name="email"
                            onChange={(e) => onChange(e)}
                            value={email}
                            placeholder="Correo electr??nico"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      placeholder="Mensaje"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <div className="edrea_tm_button">
                    <input className="a" type="submit" value="Enviar mensaje" />
                  </div>
                  {/* If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
