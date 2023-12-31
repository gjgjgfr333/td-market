import React from 'react';
import './box-faq.scss'

const BoxFaq = () => {
    return (
        <div className={'faq'}>
            <h2 className={'faq__title'}>
                Вопрос-ответ
            </h2>
            <main className={'faq__main'}>

                <aside className={'aside'}>
                    <div className={'aside__block'}>
                        <a className={'aside__title'} href={'#checkout'}>
                            Оформление заказа
                        </a>
                        <a href="#howToOrder" className={'aside__anchor'}>
                            Как заказать?
                        </a>
                        <a href="#howDoIAdd" className={'aside__anchor'}>
                            Как добавить или удалить товар из оформленного заказа?
                        </a>
                        <a href="#howCanITrack" className={'aside__anchor'}>
                            Как я могу отследить заказ?
                        </a>
                        <a href="#howToCansel" className={'aside__anchor'}>
                            Как отменить оформленный заказ?
                        </a>
                    </div>
                    <div className={'aside__block'}>
                        <a href={'#delivery'} className={'aside__title'}>
                            Доставка
                        </a>
                        <a href="#howFast" className={'aside__anchor'}>
                            Как быстро доставят мой заказ?
                        </a>
                        <a href="#howToChange" className={'aside__anchor'}>
                            Как изменить дату доставки?
                        </a>
                    </div>
                    <div className={'aside__block'}>
                        <a href={'#payment'} className={'aside__title'}>
                            Оплата
                        </a>
                        <a href="#howToPay" className={'aside__anchor'}>
                            Как оплатить заказ?
                        </a>
                    </div>
                    <div className={'aside__block'}>
                        <a href={'#return'} className={'aside__title'}>
                            Возврат товаров и денег
                        </a>
                        <a href="#howWillIGet" className={'aside__anchor'}>
                            Как мне вернут деньги?
                        </a>
                        <a href="#whichCard" className={'aside__anchor'}>
                            На какую карту придут деньги?
                        </a>
                    </div>
                    <div className={'aside__block'}>
                        <a href={'#consultation'} className={'aside__title'}>
                            Консультаця по товару
                        </a>
                    </div>
                </aside>
                <section className={'information'}>
                    <h2 className={'information__title'} id={'checkout'}>
                        Оформление заказа
                    </h2>
                    <h3 className={'information__subtitle'} id={'howToOrder'}>
                        Как заказать?
                    </h3>
                    <p className={'information__p'}>
                        <ol>
                            <li>
                                Добавьте товары в корзину
                            </li>
                            <li>
                                Проверьте количество и характеристики товара: например, размер и цвет
                            </li>
                            <li>
                                Нажмите «Оформить»
                            </li>
                            <li>
                                В разделе оформления заказа укажите город и способ доставки — в пункт выдачи или курьером
                            </li>
                            <li>
                                Введите и проверьте данные о получателе заказа. Почему это важно: на указанную почту придет чек об оплате, а на телефон — код выдачи заказа. Имя и фамилия понадобятся для сверки с паспортом, если вы заказали товар с возрастным ограничением или использовали промокод
                            </li>
                            <li>
                                Введите промокод, если он есть. Актуальные промокоды можно найти на сайте kazanexpress.ru, в наших соцсетях, пуш-уведомлениях или СМС
                            </li>
                            <li>
                                Оплатите заказ. Введите реквизиты карты или выберите оплату Apple Pay/Google Pay. Минимальная сумма заказа — будет отображена в вашей корзине.
                            </li>
                            <li>
                                Для завершения оплаты картой введите код, который придет от вашего банка
                            </li>
                            <li>
                                Если решите оплатить позже, заказ будет в резерве еще 30 минут
                            </li>
                        </ol>
                    </p>
                    <h3 className={'information__subtitle'} id={'howDoIAdd'}>
                        Как добавить или удалить товар из оформленного заказа?
                    </h3>
                    <p className={'information__p'}>
                        Мы собираем и отправляем заказы очень быстро — между оплатой и сборкой вашего заказа проходит всего пара минут. Поэтому мы технически не можем добавлять или удалять товары из оформленного и оплаченного заказа.<br/>
                        Если вы хотите дозаказать товары, оформите их отдельно и получите вместе с первым заказом.
                    </p>
                    <h3 className={'information__subtitle'} id={'howCanITrack'}>
                        Как я могу отследить заказ?
                    </h3>
                    <p className={'information__p'}>
                        Заказ можно отследить по статусу. Он отобразится в разделе «Кабинет» — «Мои заказы» — «Все». Заказы проходят несколько этапов доставки:<br/><br/>
                        «Ожидает отправки» — мы упаковываем товары на складе и готовим их к отправке.<br/> «Отправлен» — заказ уже в пути.<br/> «Получен» — заказ прибыл.
                    </p>
                    <h3 className={'information__subtitle'} id={'howToCansel'}>
                        Как отменить оформленный заказ?
                    </h3>
                    <p className={'information__p'}>
                        — oidsnvianvurab@mail.ru для отмены заказа<br/>
                        — по телефону 8 800 700 96 16;
                    </p>
                    <h2 className={'information__title'} id={'delivery'}>
                        Доставка
                    </h2>
                    <h3 className={'information__subtitle'} id={'howFast'}>
                        Как быстро доставят мой заказ?
                    </h3>
                    <p className={'information__p'}>
                        Дата доставки всегда отображается во время оплаты заказа и сразу после нее. Рекомендуем обращать на это внимание.
                    </p>
                    <h3 className={'information__subtitle'} id={'howToChange'}>
                        Как изменить адрес доставки для уже оформленного заказа?
                    </h3>
                    <p className={'information__p'}>
                        Мы очень быстро собираем и отправляем заказы, поэтому изменить адрес пункта выдачи можно только в течение 5 минут с момента оформления заказа. Просто позвоните 8 800 700 96 16. Сразу сообщите номер заказа и адрес доставки, мы перенаправим его туда
                    </p>
                    <h2 className={'information__title'} id={'payment'}>
                        Оплата
                    </h2>
                    <h3 className={'information__subtitle'} id={'howToPay'}>
                        Как оплатить заказ?
                    </h3>
                    <p className={'information__p'}>
                        На сайте или в приложении после оформления заказа. Доступные способы оплаты:<br/>
                        Банковскими картами АПБ и ЭксимБанк
                    </p>
                    <h2 className={'information__title'} id={'return'}>
                        Возврат товаров и денег
                    </h2>
                    <p className={'information__p'}>
                        Как вернуть сложную технику?<br/>
                        Обратитесь по номеру телефона в течение 7 дней после получения, если у вас нет претензий к качеству. К ван направится администратор, администратор осмотрит товар и убедится, что на нем нет следов эксплуатации, а упаковка со штрихкодом цела. Технику с браком можно вернуть в течение 15 дней. Если вы обратитесь позже, то мы примем его только на ремонт.
                        <br/>
                        Как брак, так и исправный товар мы примем и передадим на экспертизу продавцу. Она продлится не больше 10 дней. Если вы сдаете бракованный товар, вы можете предпочесть возврату обмен — тогда придется подождать 20 дней. А ремонт займет до 45 дней. Если последний день срока проверки выпадает на выходной, мы сообщим результаты в ближайший рабочий день.
                        <br/>
                        Товар с браком можно принести в течение 14 дней, либо в течение срока гарантии от производителя. Он может быть указан на упаковке товара, гарантийном талоне, либо в карточке товара. После того как администратор проверит товар, он сориентирует вас по возможности возврата.
                        <br/>
                        Спустя 14 дней или после гарантийного срока (но только в пределах двух лет) покупатель может найти недостатки товара и доказать, что они появились до получения им заказа.
                        <br/>
                        Доказательством может быть заключение экспертизы, проведенной по инициативе и за счет покупателя. Мы примем товар с результатами экспертизы в пункте выдачи и передадим на проверку качества. При подтверждении заводского брака оформим возврат и компенсируем стоимость экспертизы.
                        <br/>
                        Что делать, если мне не пришел товар / пришел, но не тот / пришел, но не весь / пришел битый?
                        Мы принимаем такие запросы в течение 14 дней после получения заказа. Вы можете обратиться в поддержку, и наши специалисты проведут проверку.
                        <br/>
                        Опишите проблему и отправьте номер заказа, фото товара и его штрихкода на упаковке на почту neinin@mail.cum или позвоните по номеру 8 800 700 96 16
                        Чтобы избежать долгой проверки, советуем проверять заказ сразу в пункте выдачи, тогда возврат можно будет оформить тут же.
                    </p>
                    <h3 className={'information__subtitle'} id={'howWillIGet'}>
                        Как мне вернут деньги?
                    </h3>
                    <p className={'information__p'}>
                        Средства поступают в среднем в течение 5 рабочих дней на карту, с который вы оплатили заказ. Максимальный срок — 30 календарных дней, точный зависит от вашего банка.
                        <br/>
                        Мы отправим на вашу почту кассовый чек, подтверждающий возврат. Статус заказа в личном кабинете сменится на «Возвращен».
                    </p>
                    <h3 className={'information__subtitle'} id={'whichCard'}>
                        На какую карту придут деньги?
                    </h3>
                    <p className={'information__p'}>
                        На ту, с которой был оплачен заказ. Изменить карту невозможно
                    </p>
                    <h2 className={'information__title'} id={'consultation'}>
                        Консультация по товару
                    </h2>
                    <p className={'information__p'}>
                        Где получить консультацию по товару?<br/>
                        О характеристиках товара, а также о том, как правильно его использовать, вы можете прочесть в описании товара или уточнить информацию у продавца
                    </p>
                </section>
            </main>
        </div>
    );
};

export default BoxFaq;