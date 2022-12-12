<template>
  <div>
    <BaseTitlePage :title="title" />
    <section id="pageContent">
      <b-container>
        <b-row>
          <b-col lg="3">
            <SidebarAbout isSchedule />
          </b-col>
          <b-col>
            <p
              lang="ru-RU"
              align="center"
              original-font-size="13px"
              original-border-color="rgb(68, 68, 68)"
              original-background-color="rgba(0, 0, 0, 0)"
              original-background-image="none"
              original-color="rgb(68, 68, 68)"
              original-box-shadow="none"
              original-text-shadow="none"
              original-font-family="Roboto"
              original-letter-spacing="0"
              original-line-height="22.1px"
            >
              <strong
                original-font-size="13px"
                original-border-color="rgb(68, 68, 68)"
                original-background-color="rgba(0, 0, 0, 0)"
                original-background-image="none"
                original-color="rgb(68, 68, 68)"
                original-box-shadow="none"
                original-text-shadow="none"
                original-font-family="Roboto"
                original-letter-spacing="0"
                original-line-height="22.1px"
                >Уважаемые пациенты! Клиника работает до 11:00 29 декабря и с
                8:00 9 января. В остальное время звонки и сообщения
                обрабатываться не будут!</strong
              ><br
                original-font-size="13px"
                original-border-color="rgb(68, 68, 68)"
                original-background-color="rgba(0, 0, 0, 0)"
                original-background-image="none"
                original-color="rgb(68, 68, 68)"
                original-box-shadow="none"
                original-text-shadow="none"
                original-font-family="Roboto"
                original-letter-spacing="0"
                original-line-height="22.1px"
              />
              <strong
                original-font-size="13px"
                original-border-color="rgb(68, 68, 68)"
                original-background-color="rgba(0, 0, 0, 0)"
                original-background-image="none"
                original-color="rgb(68, 68, 68)"
                original-box-shadow="none"
                original-text-shadow="none"
                original-font-family="Roboto"
                original-letter-spacing="0"
                original-line-height="22.1px"
                >С графиком на декабрь и январь следующего года вы можете
                ознакомиться ниже.</strong
              >
            </p>
            <p
              lang="ru-RU"
              align="center"
              original-font-size="13px"
              original-border-color="rgb(68, 68, 68)"
              original-background-color="rgba(0, 0, 0, 0)"
              original-background-image="none"
              original-color="rgb(68, 68, 68)"
              original-box-shadow="none"
              original-text-shadow="none"
              original-font-family="Roboto"
              original-letter-spacing="0"
              original-line-height="22.1px"
            >
              <span
                style="font-family: Times New Roman, serif"
                original-font-size="13px"
                original-border-color="rgb(68, 68, 68)"
                original-background-color="rgba(0, 0, 0, 0)"
                original-background-image="none"
                original-color="rgb(68, 68, 68)"
                original-box-shadow="none"
                original-text-shadow="none"
                original-font-family='"Times New Roman", serif'
                original-letter-spacing="0"
                original-line-height="22.1px"
                ><span
                  style="font-size: medium"
                  original-font-size="16px"
                  original-border-color="rgb(68, 68, 68)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family='"Times New Roman", serif'
                  original-letter-spacing="0"
                  original-line-height="27.2px"
                  ><i
                    original-font-size="16px"
                    original-border-color="rgb(68, 68, 68)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family='"Times New Roman", serif'
                    original-letter-spacing="0"
                    original-line-height="27.2px"
                    >ГРАФИК РАБОТЫ ВРАЧЕЙ ООО «Клиника МАММЭ» НА ДЕКАБРЬ 2022 г.
                    29.12 до 11:00, 30-31.12 — вых.</i
                  ></span
                ></span
              >
            </p>
            <table
              width="100%"
              cellspacing="0"
              cellpadding="5"
              original-font-size="13px"
              original-border-color="rgb(128, 128, 128)"
              original-background-color="rgba(0, 0, 0, 0)"
              original-background-image="none"
              original-color="rgb(68, 68, 68)"
              original-box-shadow="none"
              original-text-shadow="none"
              original-font-family="Roboto"
              original-letter-spacing="0"
              original-line-height="22.1px"
            >
              <tbody
                original-font-size="13px"
                original-border-color="rgb(128, 128, 128)"
                original-background-color="rgba(0, 0, 0, 0)"
                original-background-image="none"
                original-color="rgb(68, 68, 68)"
                original-box-shadow="none"
                original-text-shadow="none"
                original-font-family="Roboto"
                original-letter-spacing="0"
                original-line-height="22.1px"
              >
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="7"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Врач</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Специальность</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >понедельник
                          </b></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >вторник</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >среда</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >четверг</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >пятница</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >суббота</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="29"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Худоев
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Эдуард Сергеевич</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Маммолог,</span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >пл. хирург, онколог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="5"
                    width="61%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="zxx"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 18:30
                          </b></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >16.12 — вых.</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 13:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >10, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="30"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Шпорт
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Юрий Николаевич</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Хирург общ. практики</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="5"
                    width="61%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="zxx"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 18:30
                          </b></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 17.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="26"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Манохина
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Ангелина Викторовна</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: xx-small"
                          original-font-size="9px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="15.3px"
                          >Маммолог</span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: xx-small"
                          original-font-size="9px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="15.3px"
                          >онколог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="5"
                    width="61%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 16:00</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="36"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Рагимова
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Эльмира Юсифовна</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: xx-small"
                          original-font-size="9px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="15.3px"
                          >Маммолог</span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: xx-small"
                          original-font-size="9px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="15.3px"
                          >онколог, хирург</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="5"
                    width="61%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-size: small"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><b
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family="Roboto"
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >08:30 — 17:00
                        </b></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >05.12 — 10:00 — 17:00, 19 — 29.12 — отпуск</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >10, 17.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="36"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Щукина (Косинец)
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Наталья Борисовна</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Гинеколог,</span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >хирург</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="5"
                    width="61%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-size: small"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><b
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family="Roboto"
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >08:30 — 14:00
                        </b></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >13:30 — 18:30 — 02, 16.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 17.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="39"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Загорулько
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Екатерина Вячеславовна</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Гинеколог,</span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >хирург</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="5"
                    width="61%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 17:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >26 — 29.12 — вых.</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >10, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="43"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Хубирьянц
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Светлана Ивановна</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Гинеколог, хирург
                        </span></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="4"
                    width="49%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30-12:00</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="46"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Пружинина
                          </b></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Ирина Зиновьевна</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >УЗИ</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="5"
                    width="61%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 18:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-size: small"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><b
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family="Roboto"
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >нечетные дни месяца</b
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >10, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="41"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Лебедева
                          </b></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Вера Леонидовна</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >УЗИ</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="5"
                    width="61%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 18:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-size: small"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><b
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family="Roboto"
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >четные дни месяца</b
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 17.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="50"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Балина
                          </b></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Любовь Андреевна</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Рентгенолог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="5"
                    width="61%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="zxx"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 —
                            <span
                              lang="ru-RU"
                              original-font-size="13px"
                              original-border-color="rgb(68, 68, 68)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(68, 68, 68)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >18:30</span
                            ></b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >нечетные дни месяца</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 17.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="43"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Каштанов</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Антон Евгеньевич</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Рентгенолог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="5"
                    width="61%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="zxx"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 —
                            <span
                              lang="ru-RU"
                              original-font-size="13px"
                              original-border-color="rgb(68, 68, 68)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(68, 68, 68)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >18:30</span
                            ></b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >четные дни месяца</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >10, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="47"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Павловец
                          </b></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Вадим Петрович</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Кардиолог,</span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >гематолог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 12:30</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 18:30</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 12:30</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 18:30</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 12:30</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 10, 17, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="38"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Гончарова
                          </b></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Виктория Рудольфовна</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Эндокринолог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="5"
                    width="61%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >09:00 — 13:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >17.12 — вых.</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Зоз
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Наталья Леонидовна</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Эндокринолог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >19.12 — вых.</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:00</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:00</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:00</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:00</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 12:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 10, 17, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="45"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Диченская</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Татьяна Юрьевна</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Невролог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 13:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 10, 17, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="51"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Овсиенко
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Валерия Руслановна</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Химиотерапевт</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >09:00 — 14:30
                          </b></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 10, 17, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="51"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Капранчук Владимир Александрович</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Ортопед-травматолог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >09:00-12:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >12, 19, 26.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >09:00-12:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >13, 20, 27.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >13:00-15:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >07.12</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >09:00-12:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >14.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >09:00-12:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >01, 08, 22.12</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >09:00-11:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >29.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >09:00-12:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >02, 09, 23.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="44"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Симонов
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Илья Алексеевич</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Ортопед-травматолог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >отпуск</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="37"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Попов
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Игорь Евгеньевич</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Ангиохирург</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    ></p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >16:20 — 18:20</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >28.12 — вых.</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="34"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Скляр</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Олег Николаевич</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Ангиохирург</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 12:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 10, 17, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="38"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Казаров
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Рудольф Гарегинович</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Уролог, хирург
                        </span></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >11:00 — 14:00</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >11:00 — 14:00</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="36"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Горбоносов
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Игорь Валентинович</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >ЛОР</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="5"
                    width="61%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 18:30 с 09:40 — 16:00— операции!!!
                          </b></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >01 — 12.12 — отпуск</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >17, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="46"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Сотников Евгений Игоревич</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Пластический хирург, ЧЛХ, онколог, маммолог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 18:30</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 18:30</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >вых.</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 18:30</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 18:30</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="46"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >Трембач
                          </b></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Глеб Александрович</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Гастроэнтеролог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30 — 11:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 10, 17, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="55"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Ливен
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Рита Борисовна</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Косметолог,</span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >дерматолог</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >09:00 — 14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 10, 17, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="29"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Захарова
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Ирина Александровна</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Остеопат</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >10:00 — 14:00</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >28.12 — вых.</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="38"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Попова
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Елена Викторовна</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Эндоскопист</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  ></td>
                  <td
                    width="13%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >08:30-14:30</b
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >03, 10, 17, 24.12</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
                <tr
                  valign="top"
                  original-font-size="13px"
                  original-border-color="rgb(128, 128, 128)"
                  original-background-color="rgba(0, 0, 0, 0)"
                  original-background-image="none"
                  original-color="rgb(68, 68, 68)"
                  original-box-shadow="none"
                  original-text-shadow="none"
                  original-font-family="Roboto"
                  original-letter-spacing="0"
                  original-line-height="22.1px"
                >
                  <td
                    width="15%"
                    height="37"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Павлов
                            </b></span
                          ></span
                        ></span
                      >
                    </p>
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="color: #000000"
                        original-font-size="13px"
                        original-border-color="rgb(0, 0, 0)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(0, 0, 0)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family="Roboto"
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-family: Times New Roman, serif"
                          original-font-size="13px"
                          original-border-color="rgb(0, 0, 0)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(0, 0, 0)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><span
                            style="font-size: small"
                            original-font-size="13px"
                            original-border-color="rgb(0, 0, 0)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(0, 0, 0)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            ><b
                              original-font-size="13px"
                              original-border-color="rgb(0, 0, 0)"
                              original-background-color="rgba(0, 0, 0, 0)"
                              original-background-image="none"
                              original-color="rgb(0, 0, 0)"
                              original-box-shadow="none"
                              original-text-shadow="none"
                              original-font-family='"Times New Roman", serif'
                              original-letter-spacing="0"
                              original-line-height="22.1px"
                              >Илья Васильевич</b
                            ></span
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    width="12%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          >Челюстно-лицевой хирург</span
                        ></span
                      >
                    </p>
                  </td>
                  <td
                    colspan="6"
                    width="73%"
                    original-font-size="13px"
                    original-border-color="rgb(0, 0, 0)"
                    original-background-color="rgba(0, 0, 0, 0)"
                    original-background-image="none"
                    original-color="rgb(68, 68, 68)"
                    original-box-shadow="none"
                    original-text-shadow="none"
                    original-font-family="Roboto"
                    original-letter-spacing="0"
                    original-line-height="22.1px"
                  >
                    <p
                      lang="ru-RU"
                      align="center"
                      original-font-size="13px"
                      original-border-color="rgb(68, 68, 68)"
                      original-background-color="rgba(0, 0, 0, 0)"
                      original-background-image="none"
                      original-color="rgb(68, 68, 68)"
                      original-box-shadow="none"
                      original-text-shadow="none"
                      original-font-family="Roboto"
                      original-letter-spacing="0"
                      original-line-height="22.1px"
                    >
                      <span
                        style="font-family: Times New Roman, serif"
                        original-font-size="13px"
                        original-border-color="rgb(68, 68, 68)"
                        original-background-color="rgba(0, 0, 0, 0)"
                        original-background-image="none"
                        original-color="rgb(68, 68, 68)"
                        original-box-shadow="none"
                        original-text-shadow="none"
                        original-font-family='"Times New Roman", serif'
                        original-letter-spacing="0"
                        original-line-height="22.1px"
                        ><span
                          style="font-size: small"
                          original-font-size="13px"
                          original-border-color="rgb(68, 68, 68)"
                          original-background-color="rgba(0, 0, 0, 0)"
                          original-background-image="none"
                          original-color="rgb(68, 68, 68)"
                          original-box-shadow="none"
                          original-text-shadow="none"
                          original-font-family='"Times New Roman", serif'
                          original-letter-spacing="0"
                          original-line-height="22.1px"
                          ><b
                            original-font-size="13px"
                            original-border-color="rgb(68, 68, 68)"
                            original-background-color="rgba(0, 0, 0, 0)"
                            original-background-image="none"
                            original-color="rgb(68, 68, 68)"
                            original-box-shadow="none"
                            original-text-shadow="none"
                            original-font-family='"Times New Roman", serif'
                            original-letter-spacing="0"
                            original-line-height="22.1px"
                            >ПО СОГЛАСОВАНИЮ С ВРАЧОМ</b
                          ></span
                        ></span
                      >
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import SidebarAbout from '~/components/SidebarAbout'
export default {
  components: {
    SidebarAbout,
  },
  layout: 'page',
  data: () => ({
    title: 'Расписание',
  }),
}
</script>

<style lang="sass" scoped></style>
