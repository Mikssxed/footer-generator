function createData() {
  const name = document.querySelector(".name").value;
  const position = document.querySelector(".position").value;
  const phone = document.querySelector(".phone").value;
  const email = document.querySelector(".email").value;

  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  style="
    font-family: Arial, 'Helvetica Neue', 'Helvetica', Helvetica, sans-serif;
    box-sizing: border-box;
    font-size: 13px;
    margin: 0;
    padding: 0;
  "
>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <title>Formularz kontaktowy</title>
    <style type="text/css">
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
      }
      main {
        background-color: #000000;
        width: 600px;
        height: 160px;
        display: flex;
        border-radius: 15px;
        color: white;
        align-items: center;
        padding: 25px 40px;
        position: relative;
        overflow: hidden;
      }
      .logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        z-index: 1;
      }
      h1 {
        font-size: 13px;
      }
      h2 {
        font-size: 14px;
        margin-bottom: 9px;
      }
      .ulam-logo {
        height: 85px;
        margin-bottom: 5px;
      }
      .content {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        margin-left: 80px;
        position: relative;
        z-index: 1;
      }
      a {
        text-decoration: none;
      }
      p,
      a {
        color: white;
        font-size: 12px;
      }
      a:last-of-type {
        text-decoration: underline;
      }
      .squares {
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
      .square1 {
        position: absolute;
        width: 133.21px;
        height: 181.43px;
        top: -35.42px;
        left: 90px;
        background: linear-gradient(278.98deg, #ca0000 36.79%, #a238f5 158.18%);
        opacity: 0.8;
        filter: blur(50px);
        border-radius: 2140.37px;
        transform: rotate(93.99deg);
      }
      .square2 {
        position: absolute;
        width: 122.71px;
        height: 119.7px;
        left: 60px;
        bottom: -10px;
        background: linear-gradient(90deg, #e3258c 0%, #a03cee 100%);
        opacity: 0.9;
        filter: blur(50px);
        border-radius: 1008.29px;
        transform: rotate(-31.06deg);
      }
      .square3 {
        position: absolute;
        width: 80.9px;
        height: 78.9px;
        top: 40px;
        left: 20px;

        background: linear-gradient(90deg, #9025e3 0%, #553cee 100%);
        opacity: 0.8;
        filter: blur(50px);
        border-radius: 1008.29px;
        transform: rotate(-31.06deg);
      }
      .social {
        margin-left: auto;
        margin-right: 0;
        margin-top: auto;
        margin-bottom: 0;
        display: flex;
        position: relative;
        z-index: 1;
      }
      .social a {
        margin-left: 10px;
        display: block;
        height: 20px;
        width: 20px;
      }
      .social img {
        height: 20px;
      }
    </style>
  </head>
  <body>
    <main>
      <div class="squares">
        <div class="square1"></div>
        <div class="square2"></div>
        <div class="square3"></div>
      </div>
      <div class="logo-container">
        <img
          class="ulam-logo"
          src="https://uploads-ssl.webflow.com/63086d41671f3bfcf18a5762/6308715e29bf6350d593471e_logo.svg"
          alt="ulam labs"
        />
        <h1>ULAM LABS</h1>
      </div>
      <div class="content">
        <h2 class="name">${name}</h2>
        <p class="position">${position}</p>
        <a class="phone" href="tel:${phone}">+48${phone}</a>
        <a class="email" href="mailto:${email}">${email}</a>
        <a href="https://www.ulam.io/">ulam.io</a>
      </div>
      <div class="social">
        <a href="https://pl.linkedin.com/company/ulam-labs">
          <img
            src="https://uploads-ssl.webflow.com/63086d41671f3bfcf18a5762/630f1110ac3592ddec0053e5_linkedin.svg"
            alt="linkedin"
          />
        </a>
        <a href="https://www.instagram.com/ulamlabs/"
          ><img
            src="https://uploads-ssl.webflow.com/63086d41671f3bfcf18a5762/630f1110bc0f5032b57fa21a_instagram.svg"
            alt="instagram"
        /></a>
      </div>
    </main>
  </body>
</html>

  `;
}

const downloadBtn = document.querySelector(".download");

function download(filename, text) {
  downloadBtn.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  downloadBtn.setAttribute("download", filename);
}

downloadBtn.addEventListener("click", () =>
  download("footer.html", createData())
);
