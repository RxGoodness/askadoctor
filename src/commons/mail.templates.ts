export const signupTemplate = `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Welcome to AskADoctor</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap");

      body {
        background-color: #f6f6f6;
        font-family: "Fredoka", sans-serif;
        font-size: 16px;
        line-height: 1.4;
        margin: 0;
        padding: 0;
      }

      table {
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%;
      }
      table td {
        font-family: "Fredoka", sans-serif;
        font-size: 16px;
        vertical-align: top;
      }

      .body {
        background-color: #f6f6f6;
        width: 100%;
      }

      .container {
        display: block;
        margin: 0 auto !important;
        /* makes it centered */
        max-width: 580px;
        padding: 10px;
        width: 580px;
      }

      .content {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 580px;
        padding: 10px;
      }

      .main {
        background: #ffffff;
        border-radius: 5px;
        width: 100%;
      }
      .heading {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;

        color: #121a26;
      }
      .wrapper {
        box-sizing: border-box;
        padding: 20px;
      }

      .content-block {
        padding-bottom: 10px;
        padding-top: 10px;
      }

      .footer {
        clear: both;
        margin-top: 10px;
        text-align: center;
        width: 100%;
      }
      .footer td,
      .footer p,
      .footer span,
      .footer a {
        color: #202b3c;
        font-size: 12px;
        text-align: center;
      }

      .social-list {
        list-style-type: none;
        display: flex;
        gap: 5px;
        justify-content: center;
        align-items: center;
      }

      h1,
      h2,
      h3,
      h4 {
        color: #000000;
        font-family: "Fredoka", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.2px;
        color: #384860;
        margin: 0;
        margin-bottom: 30px;
      }

      h1 {
        font-size: 35px;
        font-weight: 300;
        text-align: center;
        text-transform: capitalize;
      }

      p,
      ul,
      ol {
        font-family: "Fredoka", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        /* or 24px */
        letter-spacing: 0.2px;
        color: #384860;
        margin: 0;
        margin-bottom: 15px;
      }
      p li,
      ul li,
      ol li {
        list-style-position: inside;
        margin-left: 5px;
      }

      a {
        color: #3498db;
        text-decoration: underline;
      }

      .btn {
        box-sizing: border-box;
        width: 100%;
      }
      .btn > tbody > tr > td {
        padding-bottom: 15px;
      }
      .btn table {
        width: auto;
      }
      .btn table td {
        background-color: #ffffff;
        border-radius: 5px;
        text-align: center;
      }
      .btn a {
        background-color: #ffffff;
        border: solid 1px #3498db;
        border-radius: 5px;
        box-sizing: border-box;
        color: #3498db;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        margin: 0;
        padding: 12px 25px;
        text-decoration: none;
        text-transform: capitalize;
      }

      .btn-primary table td {
        background-color: #3498db;
      }

      .btn-primary a {
        background-color: #3498db;
        border-color: #3498db;
        color: #ffffff;
      }

      @media only screen and (max-width: 620px) {
        table.body h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table.body p,
        table.body ul,
        table.body ol,
        table.body td,
        table.body span,
        table.body a {
          font-size: 16px !important;
        }
        table.body .wrapper,
        table.body .article {
          padding: 10px !important;
        }
        table.body .content {
          padding: 0 !important;
        }
        table.body .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table.body .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table.body .btn table {
          width: 100% !important;
        }
        table.body .btn a {
          width: 100% !important;
        }
        table.body .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
    </style>
  </head>

  <body>
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="body"
    >
      <tr>
        <td class="container">
          <div class="content">
            <table role="presentation" class="main">
              <!--  MAIN  -->
              <tr>
                <td class="wrapper">
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    
                    <tr>
                      <td>
                        <p class="heading">Welcome to AskADoctor</p>
                        <p>Thank you for signing up with us.</p>
                        <p>
                          For your convenience, here are some things you can do
                          on AskADoctor:
                        </p>
                        <ul>
                          <li>Create a virtual or in-person event.</li>
                          <li>Create tickets for your event.</li>
                          <li>
                            Integrate AskADoctor into your event&#39;s website
                          </li>
                        </ul>
                        <p>And so much more.</p>
                        <p>
                          Just in case you need further assistance, feel free to
                          write us at
                          <a href="hello@AskADoctor.io" target="_blank"
                            >hello@AskADoctor.io</a
                          >
                        </p>
                        <p>Its great to have you onboard.</p>
                        <table
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="btn btn-primary"
                        ></table>

                        <p style="font-weight: bold">The AskADoctor Team</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!--  FOOTER -->
            <div class="footer">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
              >
                <tr>
                  <td class="content-block">
                    <div>
                      <img
                        src="https://res.cloudinary.com/broma/image/upload/v1671134546/Group_4_mlaut5.png"
                        alt=""
                        style="margin-left: 10px; width: 50px"
                      />
                      <p>&#169; AskADoctor 2022</p>
                    </div>
                    <div class="socials">
                      <ul class="social-list">
                        <li>
                          <a href="https://twitter.com/Nftiket1" target="_blank"
                            ><img
                              alt="twitter icon"
                              src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/Twitter_ddabte.png"
                          /></a>
                        </li>

                        <li>
                          <a
                            href="https://web.facebook.com/AskADoctorOfficial"
                            target="_blank"
                            ><img
                              src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/Facebook_vnk78d.png"
                              alt="facebook icon"
                          /></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/AskADoctorofficial/"
                            target="_blank"
                            ><img
                              src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/akar-icons_instagram-fill_ckeyqc.png"
                              alt="instagram icon"
                          /></a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/AskADoctor/mycompany/"
                            target="_blank"
                            ><img
                              alt="linkedin icon"
                              src="https://res.cloudinary.com/broma/image/upload/v1671189277/social%20icon/Linkedin_wnw8a5.png"
                          /></a>
                        </li>
                      </ul>
                    </div>
                    <span class="apple-link">
                      AskADoctor LLC <br />
                      United States <br />
                      1942 Broadway St., STE 314C <br />
                      Boulder , CO 80302 , Colorado. <br />
                      303-578-5550</span
                    >
                    <br />
                    <br />
                    if you no longer wish to receive emails,
                    <a href="#">Unsubscribe</a>
                    here
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;



export const LoginTemplate = (verification_code: string) => {
const loginTemplate = `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Login to AskADoctor</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap");

      body {
        background-color: #f6f6f6;
        font-family: "Fredoka", sans-serif;
        font-size: 16px;
        line-height: 1.4;
        margin: 0;
        padding: 0;
      }

      table {
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%;
      }
      table td {
        font-family: "Fredoka", sans-serif;
        font-size: 16px;
        vertical-align: top;
      }

      .body {
        background-color: #f6f6f6;
        width: 100%;
      }

      .container {
        display: block;
        margin: 0 auto !important;
        /* makes it centered */
        max-width: 580px;
        padding: 10px;
        width: 580px;
      }

      .content {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 580px;
        padding: 10px;
      }

      .main {
        background: #ffffff;
        border-radius: 5px;
        width: 100%;
      }
      .heading {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;

        color: #121a26;
      }
      .wrapper {
        box-sizing: border-box;
        padding: 20px;
      }

      .content-block {
        padding-bottom: 10px;
        padding-top: 10px;
      }

      .footer {
        clear: both;
        margin-top: 10px;
        text-align: center;
        width: 100%;
      }
      .footer td,
      .footer p,
      .footer span,
      .footer a {
        color: #202b3c;
        font-size: 12px;
        text-align: center;
      }

      .social-list {
        list-style-type: none;
        display: flex;
        gap: 5px;
        justify-content: center;
        align-items: center;
      }

      h1,
      h2,
      h3,
      h4 {
        color: #000000;
        font-family: "Fredoka", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.2px;
        color: #384860;
        margin: 0;
        margin-bottom: 30px;
      }

      h1 {
        font-size: 35px;
        font-weight: 300;
        text-align: center;
        text-transform: capitalize;
      }

      p,
      ul,
      ol {
        font-family: "Fredoka", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        /* or 24px */
        letter-spacing: 0.2px;
        color: #384860;
        margin: 0;
        margin-bottom: 15px;
      }
      p li,
      ul li,
      ol li {
        list-style-position: inside;
        margin-left: 5px;
      }

      a {
        color: #3498db;
        text-decoration: underline;
      }

      .btn {
        box-sizing: border-box;
        width: 100%;
      }
      .btn > tbody > tr > td {
        padding-bottom: 15px;
      }
      .btn table {
        width: auto;
      }
      .btn table td {
        background-color: #ffffff;
        border-radius: 5px;
        text-align: center;
      }
      .btn a {
        background-color: #ffffff;
        border: solid 1px #3498db;
        border-radius: 5px;
        box-sizing: border-box;
        color: #3498db;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        margin: 0;
        padding: 12px 25px;
        text-decoration: none;
        text-transform: capitalize;
      }

      .btn-primary table td {
        background-color: #3498db;
      }

      .btn-primary a {
        background-color: #3498db;
        border-color: #3498db;
        color: #ffffff;
      }

      @media only screen and (max-width: 620px) {
        table.body h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table.body p,
        table.body ul,
        table.body ol,
        table.body td,
        table.body span,
        table.body a {
          font-size: 16px !important;
        }
        table.body .wrapper,
        table.body .article {
          padding: 10px !important;
        }
        table.body .content {
          padding: 0 !important;
        }
        table.body .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table.body .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table.body .btn table {
          width: 100% !important;
        }
        table.body .btn a {
          width: 100% !important;
        }
        table.body .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
    </style>
  </head>

  <body>
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="body"
    >
      <tr>
        <td class="container">
          <div class="content">
            <table role="presentation" class="main">
              <!--  MAIN  -->
              <tr>
                <td class="wrapper">
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    
                    <tr>
                      <td>
                        <p class="heading">Login on askadoctor</p>
                        <p>You are trying to login to your user account!</p>
                        <p>
                        Kindly enter the code below to proceed!
                        </p>
                        <p>
      <strong>
        2FA Code: ${parseInt(verification_code)}
      </strong>
    </p>
    <p>
    If this is not you, kindly ignore!
  </p>

  Regards.
                        <table
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="btn btn-primary"
                        ></table>

                        <p style="font-weight: bold">The AskADoctor Team</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!--  FOOTER -->
            <div class="footer">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
              >
                <tr>
                  <td class="content-block">
                    <div>
                      <img
                        src="https://res.cloudinary.com/broma/image/upload/v1671134546/Group_4_mlaut5.png"
                        alt=""
                        style="margin-left: 10px; width: 50px"
                      />
                      <p>&#169; AskADoctor 2022</p>
                    </div>
                    <div class="socials">
                      <ul class="social-list">
                        <li>
                          <a href="https://twitter.com/Nftiket1" target="_blank"
                            ><img
                              alt="twitter icon"
                              src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/Twitter_ddabte.png"
                          /></a>
                        </li>

                        <li>
                          <a
                            href="https://web.facebook.com/AskADoctorOfficial"
                            target="_blank"
                            ><img
                              src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/Facebook_vnk78d.png"
                              alt="facebook icon"
                          /></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/AskADoctorofficial/"
                            target="_blank"
                            ><img
                              src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/akar-icons_instagram-fill_ckeyqc.png"
                              alt="instagram icon"
                          /></a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/AskADoctor/mycompany/"
                            target="_blank"
                            ><img
                              alt="linkedin icon"
                              src="https://res.cloudinary.com/broma/image/upload/v1671189277/social%20icon/Linkedin_wnw8a5.png"
                          /></a>
                        </li>
                      </ul>
                    </div>
                    <span class="apple-link">
                      AskADoctor LLC <br />
                      United States <br />
                      1942 Broadway St., STE 314C <br />
                      Boulder , CO 80302 , Colorado. <br />
                      303-578-5550</span
                    >
                    <br />
                    <br />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;

return loginTemplate;
    }

export const WelcomeTemplate = () => {
      const loginTemplate = `<!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title>Login to AskADoctor</title>
          <style>
            @import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap");
      
            body {
              background-color: #f6f6f6;
              font-family: "Fredoka", sans-serif;
              font-size: 16px;
              line-height: 1.4;
              margin: 0;
              padding: 0;
            }
      
            table {
              border-collapse: separate;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              width: 100%;
            }
            table td {
              font-family: "Fredoka", sans-serif;
              font-size: 16px;
              vertical-align: top;
            }
      
            .body {
              background-color: #f6f6f6;
              width: 100%;
            }
      
            .container {
              display: block;
              margin: 0 auto !important;
              /* makes it centered */
              max-width: 580px;
              padding: 10px;
              width: 580px;
            }
      
            .content {
              box-sizing: border-box;
              display: block;
              margin: 0 auto;
              max-width: 580px;
              padding: 10px;
            }
      
            .main {
              background: #ffffff;
              border-radius: 5px;
              width: 100%;
            }
            .heading {
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 150%;
      
              color: #121a26;
            }
            .wrapper {
              box-sizing: border-box;
              padding: 20px;
            }
      
            .content-block {
              padding-bottom: 10px;
              padding-top: 10px;
            }
      
            .footer {
              clear: both;
              margin-top: 10px;
              text-align: center;
              width: 100%;
            }
            .footer td,
            .footer p,
            .footer span,
            .footer a {
              color: #202b3c;
              font-size: 12px;
              text-align: center;
            }
      
            .social-list {
              list-style-type: none;
              display: flex;
              gap: 5px;
              justify-content: center;
              align-items: center;
            }
      
            h1,
            h2,
            h3,
            h4 {
              color: #000000;
              font-family: "Fredoka", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 150%;
              letter-spacing: 0.2px;
              color: #384860;
              margin: 0;
              margin-bottom: 30px;
            }
      
            h1 {
              font-size: 35px;
              font-weight: 300;
              text-align: center;
              text-transform: capitalize;
            }
      
            p,
            ul,
            ol {
              font-family: "Fredoka", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 150%;
              /* or 24px */
              letter-spacing: 0.2px;
              color: #384860;
              margin: 0;
              margin-bottom: 15px;
            }
            p li,
            ul li,
            ol li {
              list-style-position: inside;
              margin-left: 5px;
            }
      
            a {
              color: #3498db;
              text-decoration: underline;
            }
      
            .btn {
              box-sizing: border-box;
              width: 100%;
            }
            .btn > tbody > tr > td {
              padding-bottom: 15px;
            }
            .btn table {
              width: auto;
            }
            .btn table td {
              background-color: #ffffff;
              border-radius: 5px;
              text-align: center;
            }
            .btn a {
              background-color: #ffffff;
              border: solid 1px #3498db;
              border-radius: 5px;
              box-sizing: border-box;
              color: #3498db;
              cursor: pointer;
              display: inline-block;
              font-size: 14px;
              font-weight: bold;
              margin: 0;
              padding: 12px 25px;
              text-decoration: none;
              text-transform: capitalize;
            }
      
            .btn-primary table td {
              background-color: #3498db;
            }
      
            .btn-primary a {
              background-color: #3498db;
              border-color: #3498db;
              color: #ffffff;
            }
      
            @media only screen and (max-width: 620px) {
              table.body h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
              }
              table.body p,
              table.body ul,
              table.body ol,
              table.body td,
              table.body span,
              table.body a {
                font-size: 16px !important;
              }
              table.body .wrapper,
              table.body .article {
                padding: 10px !important;
              }
              table.body .content {
                padding: 0 !important;
              }
              table.body .container {
                padding: 0 !important;
                width: 100% !important;
              }
              table.body .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
              }
              table.body .btn table {
                width: 100% !important;
              }
              table.body .btn a {
                width: 100% !important;
              }
              table.body .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
              }
            }
          </style>
        </head>
      
        <body>
          <table
            role="presentation"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="body"
          >
            <tr>
              <td class="container">
                <div class="content">
                  <table role="presentation" class="main">
                    <!--  MAIN  -->
                    <tr>
                      <td class="wrapper">
                        <table
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                        >
                          <tr>
                            <td style="margin: 15px 0; display: flex">
                              <img
                                src="https://res.cloudinary.com/broma/image/upload/v1671132281/newlogo_rlijf9.png"
                                alt=""
                                style="margin-left: 10px; width: 130px"
                              />
                            </td>
                          </tr>
                          <tr>
                          <td>
                          <p class="heading">Welcome to AskADoctor</p>
                          <p>Thank you for signing up with us.</p>
                          <p>
                            For your convenience, here are some things you can do
                            on AskADoctor:
                          </p>
                          <ul>
                            <li>Create a virtual or in-person event.</li>
                            <li>Create tickets for your event.</li>
                            <li>
                              Integrate AskADoctor into your event&#39;s website
                            </li>
                          </ul>
                          <p>And so much more.</p>
                          <p>
                            Just in case you need further assistance, feel free to
                            write us at
                            <a href="hello@AskADoctor.io" target="_blank"
                              >hello@AskADoctor.io</a
                            >
                          </p>
                          <p>Its great to have you onboard.</p>
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="btn btn-primary"
                          ></table>
  
                          <p style="font-weight: bold">The AskADoctor Team</p>
                        </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
      
                  <!--  FOOTER -->
                  <div class="footer">
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                    >
                      <tr>
                        <td class="content-block">
                          <div>
                            <img
                              src="https://res.cloudinary.com/broma/image/upload/v1671134546/Group_4_mlaut5.png"
                              alt=""
                              style="margin-left: 10px; width: 50px"
                            />
                            <p>&#169; AskADoctor 2022</p>
                          </div>
                          <div class="socials">
                            <ul class="social-list">
                              <li>
                                <a href="https://twitter.com/Nftiket1" target="_blank"
                                  ><img
                                    alt="twitter icon"
                                    src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/Twitter_ddabte.png"
                                /></a>
                              </li>
      
                              <li>
                                <a
                                  href="https://web.facebook.com/AskADoctorOfficial"
                                  target="_blank"
                                  ><img
                                    src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/Facebook_vnk78d.png"
                                    alt="facebook icon"
                                /></a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/AskADoctorofficial/"
                                  target="_blank"
                                  ><img
                                    src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/akar-icons_instagram-fill_ckeyqc.png"
                                    alt="instagram icon"
                                /></a>
                              </li>
                              <li>
                                <a
                                  href="https://www.linkedin.com/company/AskADoctor/mycompany/"
                                  target="_blank"
                                  ><img
                                    alt="linkedin icon"
                                    src="https://res.cloudinary.com/broma/image/upload/v1671189277/social%20icon/Linkedin_wnw8a5.png"
                                /></a>
                              </li>
                            </ul>
                          </div>
                          <span class="apple-link">
                            AskADoctor LLC <br />
                            United States <br />
                            1942 Broadway St., STE 314C <br />
                            Boulder , CO 80302 , Colorado. <br />
                            303-578-5550</span
                          >
                          <br />
                          <br />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </body>
      </html>`;
      
      return loginTemplate;
          }



export const VerifyUserTemplate = (verification_code: string) => {
            const loginTemplate = `<!DOCTYPE html>
            <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <title>Login to AskADoctor</title>
                <style>
                  @import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap");
            
                  body {
                    background-color: #f6f6f6;
                    font-family: "Fredoka", sans-serif;
                    font-size: 16px;
                    line-height: 1.4;
                    margin: 0;
                    padding: 0;
                  }
            
                  table {
                    border-collapse: separate;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    width: 100%;
                  }
                  table td {
                    font-family: "Fredoka", sans-serif;
                    font-size: 16px;
                    vertical-align: top;
                  }
            
                  .body {
                    background-color: #f6f6f6;
                    width: 100%;
                  }
            
                  .container {
                    display: block;
                    margin: 0 auto !important;
                    /* makes it centered */
                    max-width: 580px;
                    padding: 10px;
                    width: 580px;
                  }
            
                  .content {
                    box-sizing: border-box;
                    display: block;
                    margin: 0 auto;
                    max-width: 580px;
                    padding: 10px;
                  }
            
                  .main {
                    background: #ffffff;
                    border-radius: 5px;
                    width: 100%;
                  }
                  .heading {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 150%;
            
                    color: #121a26;
                  }
                  .wrapper {
                    box-sizing: border-box;
                    padding: 20px;
                  }
            
                  .content-block {
                    padding-bottom: 10px;
                    padding-top: 10px;
                  }
            
                  .footer {
                    clear: both;
                    margin-top: 10px;
                    text-align: center;
                    width: 100%;
                  }
                  .footer td,
                  .footer p,
                  .footer span,
                  .footer a {
                    color: #202b3c;
                    font-size: 12px;
                    text-align: center;
                  }
            
                  .social-list {
                    list-style-type: none;
                    display: flex;
                    gap: 5px;
                    justify-content: center;
                    align-items: center;
                  }
            
                  h1,
                  h2,
                  h3,
                  h4 {
                    color: #000000;
                    font-family: "Fredoka", sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 150%;
                    letter-spacing: 0.2px;
                    color: #384860;
                    margin: 0;
                    margin-bottom: 30px;
                  }
            
                  h1 {
                    font-size: 35px;
                    font-weight: 300;
                    text-align: center;
                    text-transform: capitalize;
                  }
            
                  p,
                  ul,
                  ol {
                    font-family: "Fredoka", sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 150%;
                    /* or 24px */
                    letter-spacing: 0.2px;
                    color: #384860;
                    margin: 0;
                    margin-bottom: 15px;
                  }
                  p li,
                  ul li,
                  ol li {
                    list-style-position: inside;
                    margin-left: 5px;
                  }
            
                  a {
                    color: #3498db;
                    text-decoration: underline;
                  }
            
                  .btn {
                    box-sizing: border-box;
                    width: 100%;
                  }
                  .btn > tbody > tr > td {
                    padding-bottom: 15px;
                  }
                  .btn table {
                    width: auto;
                  }
                  .btn table td {
                    background-color: #ffffff;
                    border-radius: 5px;
                    text-align: center;
                  }
                  .btn a {
                    background-color: #ffffff;
                    border: solid 1px #3498db;
                    border-radius: 5px;
                    box-sizing: border-box;
                    color: #3498db;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 14px;
                    font-weight: bold;
                    margin: 0;
                    padding: 12px 25px;
                    text-decoration: none;
                    text-transform: capitalize;
                  }
            
                  .btn-primary table td {
                    background-color: #3498db;
                  }
            
                  .btn-primary a {
                    background-color: #3498db;
                    border-color: #3498db;
                    color: #ffffff;
                  }
            
                  @media only screen and (max-width: 620px) {
                    table.body h1 {
                      font-size: 28px !important;
                      margin-bottom: 10px !important;
                    }
                    table.body p,
                    table.body ul,
                    table.body ol,
                    table.body td,
                    table.body span,
                    table.body a {
                      font-size: 16px !important;
                    }
                    table.body .wrapper,
                    table.body .article {
                      padding: 10px !important;
                    }
                    table.body .content {
                      padding: 0 !important;
                    }
                    table.body .container {
                      padding: 0 !important;
                      width: 100% !important;
                    }
                    table.body .main {
                      border-left-width: 0 !important;
                      border-radius: 0 !important;
                      border-right-width: 0 !important;
                    }
                    table.body .btn table {
                      width: 100% !important;
                    }
                    table.body .btn a {
                      width: 100% !important;
                    }
                    table.body .img-responsive {
                      height: auto !important;
                      max-width: 100% !important;
                      width: auto !important;
                    }
                  }
                </style>
              </head>
            
              <body>
                <table
                  role="presentation"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="body"
                >
                  <tr>
                    <td class="container">
                      <div class="content">
                        <table role="presentation" class="main">
                          <!--  MAIN  -->
                          <tr>
                            <td class="wrapper">
                              <table
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                              >
                                </tr>
                                <tr>
                                  <td>
                                    <p class="heading">Verify email</p>
                                    <p>
                        You are one step away from becoming a user on AskADoctor!
                        </p>

                        <p>
                        Kindly enter the OTP below to verify your email
                        </p>
                  <strong>
                    2FA Code: ${parseInt(verification_code)}
                  </strong>
                </p>
                <p>
                If this is not you, kindly ignore!
              </p>
            
              Regards.
                                    <table
                                      role="presentation"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="btn btn-primary"
                                    ></table>
            
                                    <p style="font-weight: bold">The AskADoctor Team</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
            
                        <!--  FOOTER -->
                        <div class="footer">
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                          >
                            <tr>
                              <td class="content-block">
                                <div>
                                  <img
                                    src="https://res.cloudinary.com/broma/image/upload/v1671134546/Group_4_mlaut5.png"
                                    alt=""
                                    style="margin-left: 10px; width: 50px"
                                  />
                                  <p>&#169; AskADoctor 2022</p>
                                </div>
                                <div class="socials">
                                  <ul class="social-list">
                                    <li>
                                      <a href="https://twitter.com/Nftiket1" target="_blank"
                                        ><img
                                          alt="twitter icon"
                                          src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/Twitter_ddabte.png"
                                      /></a>
                                    </li>
            
                                    <li>
                                      <a
                                        href="https://web.facebook.com/AskADoctorOfficial"
                                        target="_blank"
                                        ><img
                                          src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/Facebook_vnk78d.png"
                                          alt="facebook icon"
                                      /></a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://www.instagram.com/AskADoctorofficial/"
                                        target="_blank"
                                        ><img
                                          src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/akar-icons_instagram-fill_ckeyqc.png"
                                          alt="instagram icon"
                                      /></a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://www.linkedin.com/company/AskADoctor/mycompany/"
                                        target="_blank"
                                        ><img
                                          alt="linkedin icon"
                                          src="https://res.cloudinary.com/broma/image/upload/v1671189277/social%20icon/Linkedin_wnw8a5.png"
                                      /></a>
                                    </li>
                                  </ul>
                                </div>
                                <span class="apple-link">
                                  AskADoctor LLC <br />
                                  United States <br />
                                  1942 Broadway St., STE 314C <br />
                                  Boulder , CO 80302 , Colorado. <br />
                                  303-578-5550</span
                                >
                                <br />
                                <br />
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </body>
            </html>`;
            
            return loginTemplate;
                }


export const AddDoctorTemplate = (verification_code: string, email: string) => {
                  const loginTemplate = `<!DOCTYPE html>
                  <html>
                    <head>
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                      <title>Login to AskADoctor</title>
                      <style>
                        @import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap");
                  
                        body {
                          background-color: #f6f6f6;
                          font-family: "Fredoka", sans-serif;
                          font-size: 16px;
                          line-height: 1.4;
                          margin: 0;
                          padding: 0;
                        }
                  
                        table {
                          border-collapse: separate;
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          width: 100%;
                        }
                        table td {
                          font-family: "Fredoka", sans-serif;
                          font-size: 16px;
                          vertical-align: top;
                        }
                  
                        .body {
                          background-color: #f6f6f6;
                          width: 100%;
                        }
                  
                        .container {
                          display: block;
                          margin: 0 auto !important;
                          /* makes it centered */
                          max-width: 580px;
                          padding: 10px;
                          width: 580px;
                        }
                  
                        .content {
                          box-sizing: border-box;
                          display: block;
                          margin: 0 auto;
                          max-width: 580px;
                          padding: 10px;
                        }
                  
                        .main {
                          background: #ffffff;
                          border-radius: 5px;
                          width: 100%;
                        }
                        .heading {
                          font-style: normal;
                          font-weight: 500;
                          font-size: 20px;
                          line-height: 150%;
                  
                          color: #121a26;
                        }
                        .wrapper {
                          box-sizing: border-box;
                          padding: 20px;
                        }
                  
                        .content-block {
                          padding-bottom: 10px;
                          padding-top: 10px;
                        }
                  
                        .footer {
                          clear: both;
                          margin-top: 10px;
                          text-align: center;
                          width: 100%;
                        }
                        .footer td,
                        .footer p,
                        .footer span,
                        .footer a {
                          color: #202b3c;
                          font-size: 12px;
                          text-align: center;
                        }
                  
                        .social-list {
                          list-style-type: none;
                          display: flex;
                          gap: 5px;
                          justify-content: center;
                          align-items: center;
                        }
                  
                        h1,
                        h2,
                        h3,
                        h4 {
                          color: #000000;
                          font-family: "Fredoka", sans-serif;
                          font-style: normal;
                          font-weight: 400;
                          font-size: 16px;
                          line-height: 150%;
                          letter-spacing: 0.2px;
                          color: #384860;
                          margin: 0;
                          margin-bottom: 30px;
                        }
                  
                        h1 {
                          font-size: 35px;
                          font-weight: 300;
                          text-align: center;
                          text-transform: capitalize;
                        }
                  
                        p,
                        ul,
                        ol {
                          font-family: "Fredoka", sans-serif;
                          font-style: normal;
                          font-weight: 400;
                          font-size: 16px;
                          line-height: 150%;
                          /* or 24px */
                          letter-spacing: 0.2px;
                          color: #384860;
                          margin: 0;
                          margin-bottom: 15px;
                        }
                        p li,
                        ul li,
                        ol li {
                          list-style-position: inside;
                          margin-left: 5px;
                        }
                  
                        a {
                          color: #3498db;
                          text-decoration: underline;
                        }
                  
                        .btn {
                          box-sizing: border-box;
                          width: 100%;
                        }
                        .btn > tbody > tr > td {
                          padding-bottom: 15px;
                        }
                        .btn table {
                          width: auto;
                        }
                        .btn table td {
                          background-color: #ffffff;
                          border-radius: 5px;
                          text-align: center;
                        }
                        .btn a {
                          background-color: #ffffff;
                          border: solid 1px #3498db;
                          border-radius: 5px;
                          box-sizing: border-box;
                          color: #3498db;
                          cursor: pointer;
                          display: inline-block;
                          font-size: 14px;
                          font-weight: bold;
                          margin: 0;
                          padding: 12px 25px;
                          text-decoration: none;
                          text-transform: capitalize;
                        }
                  
                        .btn-primary table td {
                          background-color: #3498db;
                        }
                  
                        .btn-primary a {
                          background-color: #3498db;
                          border-color: #3498db;
                          color: #ffffff;
                        }
                  
                        @media only screen and (max-width: 620px) {
                          table.body h1 {
                            font-size: 28px !important;
                            margin-bottom: 10px !important;
                          }
                          table.body p,
                          table.body ul,
                          table.body ol,
                          table.body td,
                          table.body span,
                          table.body a {
                            font-size: 16px !important;
                          }
                          table.body .wrapper,
                          table.body .article {
                            padding: 10px !important;
                          }
                          table.body .content {
                            padding: 0 !important;
                          }
                          table.body .container {
                            padding: 0 !important;
                            width: 100% !important;
                          }
                          table.body .main {
                            border-left-width: 0 !important;
                            border-radius: 0 !important;
                            border-right-width: 0 !important;
                          }
                          table.body .btn table {
                            width: 100% !important;
                          }
                          table.body .btn a {
                            width: 100% !important;
                          }
                          table.body .img-responsive {
                            height: auto !important;
                            max-width: 100% !important;
                            width: auto !important;
                          }
                        }
                      </style>
                    </head>
                  
                    <body>
                      <table
                        role="presentation"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="body"
                      >
                        <tr>
                          <td class="container">
                            <div class="content">
                              <table role="presentation" class="main">
                                <!--  MAIN  -->
                                <tr>
                                  <td class="wrapper">
                                    <table
                                      role="presentation"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                    >
                                      <tr>
                                        <td>
                                          <p class="heading">Welcome Doc</p>
                                          <p>
                              It has been an exciting journey, we are happy to have you on AskADoctor as one of our professionals!
                              </p>
      
                              <p>
                              These is your login credentials on AskADoctor website
                              </p>
                        <strong>
                          email: ${email}
                          password: ${parseInt(verification_code)}
                        </strong>
                      </p>
                      <p>
                      If this is not you, kindly ignore!
                    </p>
                  
                    Regards.
                                          <table
                                            role="presentation"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="btn btn-primary"
                                          ></table>
                  
                                          <p style="font-weight: bold">The AskADoctor Team</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                  
                              <!--  FOOTER -->
                              <div class="footer">
                                <table
                                  role="presentation"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                >
                                  <tr>
                                    <td class="content-block">
                                      <div>
                                        <img
                                          src="https://res.cloudinary.com/broma/image/upload/v1671134546/Group_4_mlaut5.png"
                                          alt=""
                                          style="margin-left: 10px; width: 50px"
                                        />
                                        <p>&#169; AskADoctor 2022</p>
                                      </div>
                                      <div class="socials">
                                        <ul class="social-list">
                                          <li>
                                            <a href="https://twitter.com/Nftiket1" target="_blank"
                                              ><img
                                                alt="twitter icon"
                                                src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/Twitter_ddabte.png"
                                            /></a>
                                          </li>
                  
                                          <li>
                                            <a
                                              href="https://web.facebook.com/AskADoctorOfficial"
                                              target="_blank"
                                              ><img
                                                src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/Facebook_vnk78d.png"
                                                alt="facebook icon"
                                            /></a>
                                          </li>
                                          <li>
                                            <a
                                              href="https://www.instagram.com/AskADoctorofficial/"
                                              target="_blank"
                                              ><img
                                                src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/akar-icons_instagram-fill_ckeyqc.png"
                                                alt="instagram icon"
                                            /></a>
                                          </li>
                                          <li>
                                            <a
                                              href="https://www.linkedin.com/company/AskADoctor/mycompany/"
                                              target="_blank"
                                              ><img
                                                alt="linkedin icon"
                                                src="https://res.cloudinary.com/broma/image/upload/v1671189277/social%20icon/Linkedin_wnw8a5.png"
                                            /></a>
                                          </li>
                                        </ul>
                                      </div>
                                      <span class="apple-link">
                                        AskADoctor LLC <br />
                                        United States <br />
                                        1942 Broadway St., STE 314C <br />
                                        Boulder , CO 80302 , Colorado. <br />
                                        303-578-5550</span
                                      >
                                      <br />
                                      <br />
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </body>
                  </html>`;
                  
                  return loginTemplate;
                      }


export const ForgetPasswordTemplate = (verification_link: string) => {
                        const loginTemplate = `<!DOCTYPE html>
                        <html>
                          <head>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                            <title>Login to AskADoctor</title>
                            <style>
                              @import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap");
                        
                              body {
                                background-color: #f6f6f6;
                                font-family: "Fredoka", sans-serif;
                                font-size: 16px;
                                line-height: 1.4;
                                margin: 0;
                                padding: 0;
                              }
                        
                              table {
                                border-collapse: separate;
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                width: 100%;
                              }
                              table td {
                                font-family: "Fredoka", sans-serif;
                                font-size: 16px;
                                vertical-align: top;
                              }
                        
                              .body {
                                background-color: #f6f6f6;
                                width: 100%;
                              }
                        
                              .container {
                                display: block;
                                margin: 0 auto !important;
                                /* makes it centered */
                                max-width: 580px;
                                padding: 10px;
                                width: 580px;
                              }
                        
                              .content {
                                box-sizing: border-box;
                                display: block;
                                margin: 0 auto;
                                max-width: 580px;
                                padding: 10px;
                              }
                        
                              .main {
                                background: #ffffff;
                                border-radius: 5px;
                                width: 100%;
                              }
                              .heading {
                                font-style: normal;
                                font-weight: 500;
                                font-size: 20px;
                                line-height: 150%;
                        
                                color: #121a26;
                              }
                              .wrapper {
                                box-sizing: border-box;
                                padding: 20px;
                              }
                        
                              .content-block {
                                padding-bottom: 10px;
                                padding-top: 10px;
                              }
                        
                              .footer {
                                clear: both;
                                margin-top: 10px;
                                text-align: center;
                                width: 100%;
                              }
                              .footer td,
                              .footer p,
                              .footer span,
                              .footer a {
                                color: #202b3c;
                                font-size: 12px;
                                text-align: center;
                              }
                        
                              .social-list {
                                list-style-type: none;
                                display: flex;
                                gap: 5px;
                                justify-content: center;
                                align-items: center;
                              }
                        
                              h1,
                              h2,
                              h3,
                              h4 {
                                color: #000000;
                                font-family: "Fredoka", sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 150%;
                                letter-spacing: 0.2px;
                                color: #384860;
                                margin: 0;
                                margin-bottom: 30px;
                              }
                        
                              h1 {
                                font-size: 35px;
                                font-weight: 300;
                                text-align: center;
                                text-transform: capitalize;
                              }
                        
                              p,
                              ul,
                              ol {
                                font-family: "Fredoka", sans-serif;
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 150%;
                                /* or 24px */
                                letter-spacing: 0.2px;
                                color: #384860;
                                margin: 0;
                                margin-bottom: 15px;
                              }
                              p li,
                              ul li,
                              ol li {
                                list-style-position: inside;
                                margin-left: 5px;
                              }
                        
                              a {
                                color: #3498db;
                                text-decoration: underline;
                              }
                        
                              .btn {
                                box-sizing: border-box;
                                width: 100%;
                              }
                              .btn > tbody > tr > td {
                                padding-bottom: 15px;
                              }
                              .btn table {
                                width: auto;
                              }
                              .btn table td {
                                background-color: #ffffff;
                                border-radius: 5px;
                                text-align: center;
                              }
                              .btn a {
                                background-color: #ffffff;
                                border: solid 1px #3498db;
                                border-radius: 5px;
                                box-sizing: border-box;
                                color: #3498db;
                                cursor: pointer;
                                display: inline-block;
                                font-size: 14px;
                                font-weight: bold;
                                margin: 0;
                                padding: 12px 25px;
                                text-decoration: none;
                                text-transform: capitalize;
                              }
                        
                              .btn-primary table td {
                                background-color: #3498db;
                              }
                        
                              .btn-primary a {
                                background-color: #3498db;
                                border-color: #3498db;
                                color: #ffffff;
                              }
                        
                              @media only screen and (max-width: 620px) {
                                table.body h1 {
                                  font-size: 28px !important;
                                  margin-bottom: 10px !important;
                                }
                                table.body p,
                                table.body ul,
                                table.body ol,
                                table.body td,
                                table.body span,
                                table.body a {
                                  font-size: 16px !important;
                                }
                                table.body .wrapper,
                                table.body .article {
                                  padding: 10px !important;
                                }
                                table.body .content {
                                  padding: 0 !important;
                                }
                                table.body .container {
                                  padding: 0 !important;
                                  width: 100% !important;
                                }
                                table.body .main {
                                  border-left-width: 0 !important;
                                  border-radius: 0 !important;
                                  border-right-width: 0 !important;
                                }
                                table.body .btn table {
                                  width: 100% !important;
                                }
                                table.body .btn a {
                                  width: 100% !important;
                                }
                                table.body .img-responsive {
                                  height: auto !important;
                                  max-width: 100% !important;
                                  width: auto !important;
                                }
                              }
                            </style>
                          </head>
                        
                          <body>
                            <table
                              role="presentation"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="body"
                            >
                              <tr>
                                <td class="container">
                                  <div class="content">
                                    <table role="presentation" class="main">
                                      <!--  MAIN  -->
                                      <tr>
                                        <td class="wrapper">
                                          <table
                                            role="presentation"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                          >
                                            <tr>
                                              <td>
                                                <p class="heading">Rest Password on askadoctor</p>
                                                <p>
                                                You requested for a password reset!
                                              </p>
                                          
                                              <p>
                                                Kindly kindly click on the link below!
                                              </p>
                                          
                                              <p>
                                                <a href='${verification_link}'>Password Reset Link</a>
                                              </p>
                                          
                                              Regards.
                            <p>
                            If this is not you, kindly ignore!
                          </p>
                        
                          Regards.
                                                <table
                                                  role="presentation"
                                                  border="0"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  class="btn btn-primary"
                                                ></table>
                        
                                                <p style="font-weight: bold">The AskADoctor Team</p>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                        
                                    <!--  FOOTER -->
                                    <div class="footer">
                                      <table
                                        role="presentation"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                      >
                                        <tr>
                                          <td class="content-block">
                                            <div>
                                              <img
                                                src="https://res.cloudinary.com/broma/image/upload/v1671134546/Group_4_mlaut5.png"
                                                alt=""
                                                style="margin-left: 10px; width: 50px"
                                              />
                                              <p>&#169; AskADoctor 2022</p>
                                            </div>
                                            <div class="socials">
                                              <ul class="social-list">
                                                <li>
                                                  <a href="https://twitter.com/Nftiket1" target="_blank"
                                                    ><img
                                                      alt="twitter icon"
                                                      src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/Twitter_ddabte.png"
                                                  /></a>
                                                </li>
                        
                                                <li>
                                                  <a
                                                    href="https://web.facebook.com/AskADoctorOfficial"
                                                    target="_blank"
                                                    ><img
                                                      src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/Facebook_vnk78d.png"
                                                      alt="facebook icon"
                                                  /></a>
                                                </li>
                                                <li>
                                                  <a
                                                    href="https://www.instagram.com/AskADoctorofficial/"
                                                    target="_blank"
                                                    ><img
                                                      src="https://res.cloudinary.com/broma/image/upload/v1671189276/social%20icon/akar-icons_instagram-fill_ckeyqc.png"
                                                      alt="instagram icon"
                                                  /></a>
                                                </li>
                                                <li>
                                                  <a
                                                    href="https://www.linkedin.com/company/AskADoctor/mycompany/"
                                                    target="_blank"
                                                    ><img
                                                      alt="linkedin icon"
                                                      src="https://res.cloudinary.com/broma/image/upload/v1671189277/social%20icon/Linkedin_wnw8a5.png"
                                                  /></a>
                                                </li>
                                              </ul>
                                            </div>
                                            <span class="apple-link">
                                              AskADoctor LLC <br />
                                              United States <br />
                                              1942 Broadway St., STE 314C <br />
                                              Boulder , CO 80302 , Colorado. <br />
                                              303-578-5550</span
                                            >
                                            <br />
                                            <br />
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </body>
                        </html>`;
                        
                        return loginTemplate;
                            }
            