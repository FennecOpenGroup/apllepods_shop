import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
function QuadroBlocks() {
  const [faqlink, setFaqLink] = useState("#");
  const navigate = useNavigate();
  const [cart_amount, setAmount] = useState(0);
  const [sale, setSale] = useState(0);
  const tg = window.Telegram.WebApp;
  useEffect(() => {
    fetch("https://pop.applepodsblack.ru/api/faqs")
      .then((response) => response.json())
      .then(function (commits) {
        console.log(commits);
        let data = commits;

        setFaqLink(data.data[0].attributes.link);
      });
  }, []);
  useEffect(() => {
    setAmount(window.GlobalShoppingCart.length);
    setSale(window.GlobalSale);
  });
  // useEffect(() => {
  //   fetch("https://pop.applepodsblack.ru/api/discounts")
  //     .then((response) => response.json())
  //     .then(function (commits) {
  //       let data = commits.data;
  //       let buffer = [];
  //       for (let elem of data) {
  //         buffer.push(elem.attributes.quantity);
  //         buffer.push(elem.attributes.percent);
  //       }
  //       let quantity = [];
  //       for (let i = 0; i < buffer.length; i += 2) quantity.push();
  //       for (let elem of quantity.reverse()) if (window.GlobalShoppingCart.length >= elem) {setSale(buffer.index(elem) + 1); break}
  //     });
  // });
  return (
    <div className="quadro_blocks_main">
      <div className="quadro_blocks" style={{ paddingLeft: "8px" }}>
        <a href="#" onClick={() => navigate("/tracking")}>
          <div className="gray_block">
            <div className="inner_arrow_text">
              <p>Доставка</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.74023 13L11.3867 8.35355C11.5819 8.15829 11.5819 7.84171 11.3867 7.64645L6.74023 3"
                  stroke="#ECECEC"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p class="gray_block_description">Узнать, когда придет посылка</p>
          </div>
        </a>
        <a onClick={() => {
                  tg.openLink(`${faqlink}`, {
                    try_instant_view: true,
                  });
                }}>
          <div className="gray_block">
            <div className="inner_arrow_text">
              <p>FAQ</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.74023 13L11.3867 8.35355C11.5819 8.15829 11.5819 7.84171 11.3867 7.64645L6.74023 3"
                  stroke="#ECECEC"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p class="gray_block_description">Ответы на все вопросы</p>
          </div>
        </a>
      </div>
      <div className="quadro_blocks" style={{ paddingRight: "8px" }}>
        <a href="https://t.me/archimolotok">
          <div className="gold_block">
            <p>Связь с менеджером</p>
            <div className="inner_logo_gold_block">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7402 5H14.7402C15.1381 5 15.5196 5.15804 15.8009 5.43934C16.0822 5.72064 16.2402 6.10218 16.2402 6.5V11C16.2402 11.3978 16.0822 11.7794 15.8009 12.0607C15.5196 12.342 15.1381 12.5 14.7402 12.5H13.2402L11.7402 14.75L9.49023 12.5H7.24023C6.84241 12.5 6.46088 12.342 6.17957 12.0607C5.89827 11.7794 5.74023 11.3978 5.74023 11V11"
                  stroke="#1C1C1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.74023 1.25H10.2402C10.6381 1.25 11.0196 1.40804 11.3009 1.68934C11.5822 1.97064 11.7402 2.35218 11.7402 2.75V7.25C11.7402 7.64783 11.5822 8.02936 11.3009 8.31066C11.0196 8.59197 10.6381 8.75 10.2402 8.75H7.99023L5.74023 11L3.49023 8.75H2.74023C2.34241 8.75 1.96088 8.59197 1.67957 8.31066C1.39827 8.02936 1.24023 7.64783 1.24023 7.25V2.75C1.24023 2.35218 1.39827 1.97064 1.67957 1.68934C1.96088 1.40804 2.34241 1.25 2.74023 1.25V1.25Z"
                  stroke="#1C1C1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </a>
        <div
          class="gray_block"
          onClick={() => {
            window.notification = true;
            navigate("/cart");
          }}
        >
          <div class="inner_arrow_text">
            <p>Корзина</p>
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.74023 13L11.3867 8.35355C11.5819 8.15829 11.5819 7.84171 11.3867 7.64645L6.74023 3"
                stroke="#ECECEC"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div id="cart_block_bottom">
            <div class="shopping_cart_icon"></div>
            <p id="cart_block_amount">{cart_amount}</p>
            <p class="sale">-{sale}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuadroBlocks;
