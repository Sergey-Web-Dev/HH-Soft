import React from "react";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Section } from "../components/Section/Section";
import { SectionBlock } from "../components/Section/SectionBlock";
import { PrimaryTitle } from "../components/PrimaryTitle/PrimaryTitle";
import { Description } from "../components/Description/Description";
import { Button } from "../components/Button/Button";
import { ImageMap } from "../components/Image/ImageMap";
import { SwiperScroll } from "../components/SwiperScroll/SwiperScroll";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Header className="fixed py-6 pb-60 w-full" />
      <Main>
        <Section className=" bg-gradient-to-l from-black to-blue-950 ">
          <Section className="relative container flex justify-between items-center z-20 py-64">
            <SectionBlock className="">
              <PrimaryTitle className="2xl:w-9/12 font-ubuntu font-bold text-5xl uppercase leading-12 text-white mb-10">
                Растим показатели вашего бизнеса
              </PrimaryTitle>
              <Description className="2xl:w-[45%] font-ubuntu font-light text-lg text-white mb-10">
                У всех наших BIM менеджеров опыт работы с компаниями более 10
                лет. Поэтому мы превращаем наш многолетний опыт BIM в ваш успех!
              </Description>
              <Section className="flex items-center gap-6">
                <Link to="#form1">
                  <Button className="font-ubuntu font-bold text-lg rounded bg-violet-700 text-white px-16 py-6 ">
                    Обсудить проект
                  </Button>
                </Link>
                <Link to="/Education">
                  <Button className="font-ubuntu font-bold text-lg text-violet-700 px-16 py-6 border-2 border-violet-700 rounded">
                    Выбрать курс
                  </Button>
                </Link>
              </Section>
            </SectionBlock>

            <SectionBlock>
              <ImageMap></ImageMap>
            </SectionBlock>
          </Section>

          <SwiperScroll className="pb-6" />
        </Section>
      </Main>
    </>
  );
};
