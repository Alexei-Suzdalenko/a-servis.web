<template>
<section class="ftco-section ftco-about-section">
    <div class="container-xl">
        <div class="row g-xl-5">
            <div class="col-md-6 d-flex align-items-stretch">
                <div class="img w-100" style="background-image:url(/index_files/img/person-plan.webp)">
                    <div class="counter-wrap d-flex">
                        <div class="icon"><span class="flaticon-engineer"></span></div>
                        <div class="text ps-3">
                            <span class="number"><span class="countup">11</span></span>
                            <span class="caption">Более лет опыта</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 heading-section d-flex align-items-center">
                <div class="mt-5 mt-md-0">
                    <span class="subheading">Строительная Компания Александр</span>
                    <h2 class="mb-2">Качественный и доступный ремонт в городе {{ this.$store.state.titleRu }}</h2>
                    <p class="mb-4">
                        Ремонт под ключ с гарантией в Московской области и городе {{ this.$store.state.titleRu }} без предоплат и авансов.<br/><br/>
                        Как вы уже знаете, в С.К. Александр мы занимаемся строительными работами в городе {{ this.$store.state.titleRu }}, 
                        поэтому вы всегда можете обратиться к нам за консультацией и оценкой без каких-либо обязательств.
                        Мы всегда к вашим услугам - звоните по телефону или пишите сообщения в WhatsApp.
                    </p>
                    <h4>Без предоплаты. Приступаем завтра.</h4>
                    <div class="row mt-4 g-lg-2">
                        <div class="col-lg-6 d-flex align-items-stretch services-wrap">
                            <div class="services d-flex">
                                <div class="icon"><span class="flaticon-consult"></span></div>
                                <div class="text">
                                    <h2>Общение</h2>
                                    <p class="mb-0">Бесплатная консультация</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-stretch services-wrap">
                            <div class="services d-flex">
                                <div class="icon"><span class="flaticon-floor-plan"></span></div>
                                <div class="text">
                                    <h2>Замер</h2>
                                    <p class="mb-0">Бесплатный выезд инженера-сметчика на замер</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-stretch services-wrap">
                            <div class="services d-flex">
                                <div class="icon"><span class="flaticon-construction"></span></div>
                                <div class="text">
                                    <h2>Выполнение</h2>
                                    <p class="mb-0">Контроль: фотоотчет в whatsApp </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-stretch services-wrap">
                            <div class="services d-flex">
                                <div class="icon"><span class="flaticon-building"></span></div>
                                <div class="text">
                                    <h2>Расчет</h2>
                                    <p class="mb-0">По договору с оплатой по факту выполненных работ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>