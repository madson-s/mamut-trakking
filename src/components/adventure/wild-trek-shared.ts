/**
 * O que os trekkings selvagens dizem igual.
 *
 * Palmital, Mixila e Fumaça por Baixo percorrem trilhas rústicas do antigo
 * garimpo dentro do Parque Nacional e dormem em barraca — não em casa de
 * nativo, como os do Pati. Comida, hospedagem e a lista de equipamento de
 * camping são os mesmos nos três, e a operadora publica o texto palavra por
 * palavra igual. Fica aqui para não divergir por descuido.
 *
 * ES é tradução feita neste repositório.
 */

import type { Locale } from '@/lib/site';
import type { PatiFaqItem } from './PatiFaqList';

/**
 * "O que comemos" e "onde dormimos", com as fotos que a operadora publica.
 *
 * Substitui os dois parágrafos que antes iam soltos no `sobre` — mesmo texto,
 * agora com a imagem ao lado, que é como a página de referência apresenta.
 */
export const WILD_TREK_ESTADIA: Record<Locale, { titulo: string; itens: { img: string; alt: string; titulo: string; corpo: string }[] }> = {
  pt: {
    titulo: 'Onde se dorme e o que se come.',
    itens: [
      {
        img: '/img/adventures/comum/acampamento.jpg',
        alt: 'Céu estrelado sobre a mata, visto do acampamento',
        titulo: 'Onde dormimos',
        corpo: 'Em barraca ou na beira do rio, sobre isolante térmico e saco de dormir adequados à temperatura — tudo incluso. Dependendo do clima, dá para dormir fora da barraca, com o som do rio e o céu estrelado.',
      },
      {
        img: '/img/adventures/comum/refeicoes.jpeg',
        alt: 'Panelas de arroz, feijão e massa servidas na base de acampamento à noite',
        titulo: 'Café da manhã e jantar',
        corpo: 'Preparados na base de acampamento pelo guia local, com cardápio variado. Avise restrições alimentares na reserva.',
      },
      {
        img: '/img/adventures/comum/piquenique.jpeg',
        alt: 'Piquenique estendido sobre uma canga, com frutas, pães e frios',
        titulo: 'Piquenique',
        corpo: 'Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
      },
    ],
  },
  en: {
    titulo: 'Where you sleep and what you eat.',
    itens: [
      {
        img: '/img/adventures/comum/acampamento.jpg',
        alt: 'A star-filled sky over the forest, seen from camp',
        titulo: 'Where we sleep',
        corpo: 'In tents or by the river, on sleeping mats and in sleeping bags rated for the temperature — all provided. Weather permitting, you can sleep outside the tent, with the sound of the river and a sky full of stars.',
      },
      {
        img: '/img/adventures/comum/refeicoes.jpeg',
        alt: 'Pots of rice, beans and pasta served at base camp after dark',
        titulo: 'Breakfast and dinner',
        corpo: 'Prepared at base camp by the local guide, with a menu that varies. Tell us about dietary restrictions when booking.',
      },
      {
        img: '/img/adventures/comum/piquenique.jpeg',
        alt: 'A picnic laid out on a cloth, with fruit, bread and cold cuts',
        titulo: 'The picnic',
        corpo: 'On the walks the picnic is lunch: meals balanced between vitamins, protein, fibre and carbohydrates.',
      },
    ],
  },
  es: {
    titulo: 'Dónde se duerme y qué se come.',
    itens: [
      {
        img: '/img/adventures/comum/acampamento.jpg',
        alt: 'Cielo estrellado sobre el monte, visto desde el campamento',
        titulo: 'Dónde dormimos',
        corpo: 'En carpa o a la orilla del río, sobre aislante térmico y bolsa de dormir adecuados a la temperatura — todo incluido. Según el clima, se puede dormir afuera de la carpa, con el sonido del río y el cielo estrellado.',
      },
      {
        img: '/img/adventures/comum/refeicoes.jpeg',
        alt: 'Ollas de arroz, porotos y pasta servidas en la base de campamento de noche',
        titulo: 'Desayuno y cena',
        corpo: 'Los prepara el guía local en la base de campamento, con menú variado. Avisá restricciones alimentarias en la reserva.',
      },
      {
        img: '/img/adventures/comum/piquenique.jpeg',
        alt: 'Picnic tendido sobre una tela, con frutas, panes y fiambres',
        titulo: 'El picnic',
        corpo: 'Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
      },
    ],
  },
};

/**
 * Checklist de camping. `note` muda por roteiro — é onde entra o risco
 * específico da trilha —, então vem por parâmetro.
 */
export function wildTrekChecklist(locale: Locale, note: string): PatiFaqItem {
  return { type: 'checklist', ...CHECKLIST[locale], note };
}

const CHECKLIST: Record<Locale, Omit<Extract<PatiFaqItem, { type: 'checklist' }>, 'type' | 'note'>> = {
  pt: {
    title: 'Checklist — o que levar',
    intro: 'Itens marcados com * são obrigatórios. A falta de qualquer obrigatório inviabiliza a participação. Barraca, saco de dormir e isolante térmico são fornecidos por nós.',
    requiredColumns: [
      ['Água (1,5L por pessoa)', 'Tênis ou bota de caminhada', 'Duas mudas leves para caminhar', 'Roupa de dormir', 'Roupa de banho', 'Mochila cargueira 50L+'],
      ['Boné ou chapéu', 'Capa de chuva (corpo e mochila)', 'Protetor solar', 'Lanterna de cabeça', 'Saco estanque', 'Toalha fina e chinelos'],
    ],
    recommendedColumns: [['Meias extras', 'Bastão de caminhada'], ['Repelente', 'Power bank', 'Lanche ou fruta']],
  },
  en: {
    title: 'Checklist — what to bring',
    intro: 'Items marked * are mandatory. Missing any of them makes participation unfeasible. Tent, sleeping bag and sleeping mat are provided by us.',
    requiredColumns: [
      ['Water (1.5L per person)', 'Trainers or hiking boots', 'Two light sets of walking clothes', 'Sleepwear', 'Swimwear', 'Carrying pack, 50L+'],
      ['Cap or hat', 'Rain gear (body and pack)', 'Sunscreen', 'Head torch', 'Dry bag', 'Thin towel and flip-flops'],
    ],
    recommendedColumns: [['Spare socks', 'Trekking pole'], ['Insect repellent', 'Power bank', 'Snack or fruit']],
  },
  es: {
    title: 'Checklist — qué llevar',
    intro: 'Los ítems marcados con * son obligatorios. La falta de cualquier obligatorio impide la participación. Carpa, bolsa de dormir y aislante térmico los proveemos nosotros.',
    requiredColumns: [
      ['Agua (1,5L por persona)', 'Zapatillas o botas de trekking', 'Dos mudas livianas para caminar', 'Ropa para dormir', 'Ropa de baño', 'Mochila de carga 50L+'],
      ['Gorra o sombrero', 'Piloto de lluvia (cuerpo y mochila)', 'Protector solar', 'Linterna frontal', 'Bolsa estanca', 'Toalla fina y ojotas'],
    ],
    recommendedColumns: [['Medias extra', 'Bastón de caminata'], ['Repelente', 'Power bank', 'Snack o fruta']],
  },
};

/** "Se não quiser carregar peso, há carregador pessoal" — igual nos três. */
export const WILD_TREK_PORTER: Record<Locale, string> = {
  pt: 'Se não quiser carregar peso, há opção de carregador pessoal. Os itens são conferidos na reserva e no check-in.',
  en: 'If you would rather not carry the weight, a personal porter can be arranged. Items are checked at booking and at check-in.',
  es: 'Si no querés cargar peso, hay opción de porteador personal. Los ítems se revisan en la reserva y en el check-in.',
};
