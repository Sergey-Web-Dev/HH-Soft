import React from "react";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Section } from "../components/Section/Section";
import { SectionBlock } from "../components/Section/SectionBlock";
import { PrimaryTitle } from "../components/PrimaryTitle/PrimaryTitle";
import { SecondaryTitle } from "../components/SecondaryTitle/SecondaryTitle";
import { Description } from "../components/Description/Description";
import { Button } from "../components/Button/Button";
import { ImageMap } from "../components/Image/ImageMap";
import { SwiperScroll } from "../components/SwiperScroll/SwiperScroll";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import { Lists } from "../components/Lists/Lists";
import { mockServicesCards } from "../constants/mockRoutesData";
import { List } from "../components/List/List";

export const Home = () => {
  return (
    <>
      <Header className="fixed py-6 pb-60 w-full z-[15]" />
      <Main className="">
        <Section className="relative bg-gradient-to-l from-black to-[#010631]  ">
          <Wrapper className="absolute  w-full h-full [background:_linear-gradient(268deg,_rgba(201,_69,_247,_0.20)_20.33%,_rgba(69,_129,_247,_0.00)_89.01%)] [clip-path:polygon(100%_45%,0%_85%,100%_100%)] z-[11]" />
          <Wrapper className="absolute  w-full h-full [background:_linear-gradient(268deg,_rgba(31,_0,_34,_1)_20.33%,_rgba(2,_2,_2,_1)_59.01%)] [clip-path:polygon(100%_65%,0%_100%,100%_100%)] z-[12]" />
          <Wrapper className="absolute  w-full h-full bg-black [clip-path:polygon(100%_80%,48%_100%,100%_100%)] z-[13]" />
          <Wrapper className="absolute  w-full h-full [background:_linear-gradient(272deg,#000211_3.69%,_#310156_116.09%)] [clip-path:polygon(100%_100%,0%_73%,0%_100%)] z-[14]" />
          <Section className="relative container flex justify-between items-center py-64">
            <SectionBlock className="z-[16]">
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

            <SectionBlock className="z-[16]">
              <ImageMap></ImageMap>
            </SectionBlock>
          </Section>

          <SwiperScroll />
        </Section>

        <Section className="container">
          <PrimaryTitle className="font-ubuntu font-bold text-[50px] uppercase text-center mt-32 mb-16">
            наши услуги
          </PrimaryTitle>
          <Lists className="flex justify-center items-stratch flex-wrap gap-8 ">
            {mockServicesCards.map(
              ({
                id,
                title,
                description,
                more,
                button,
                background,
                className,
              }) => (
                <List
                  key={id}
                  className="flex flex-col justify-between w-1/4 shadow-2xl py-12 px-8 rounded-xl bg-no-repeat bg-[right_2rem_top_2rem]"
                  style={{ backgroundImage: `url(${background})` }}
                >
                  <Section>
                    <SecondaryTitle className="font-ubuntu font-semibold leading-8 text-[30px] uppercase mb-6">
                      {title}
                    </SecondaryTitle>
                    <Description className="font-ubuntu font-medium leading-6 text-[16px]  mb-3">
                      {description}
                    </Description>
                    {more && (
                      <Description className="font-ubuntu font-medium leading-6 text-[16px] text-[#9166F0] mb-8">
                        {more}
                      </Description>
                    )}
                  </Section>

                  <Section>
                    <Button className="w-full font-ubuntu font-bold text-lg text-center rounded bg-violet-700 text-white px-16 py-6 ">
                      {button}
                    </Button>
                  </Section>
                </List>
              )
            )}
          </Lists>
        </Section>
      </Main>
    </>
  );
};
