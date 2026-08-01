import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Image from 'next/image';
import {
  ArrowRightIcon,
  Button,
  CaretDownIcon,
  IconButton,
  MediaCard,
  Text,
} from '@/components/ui';
import { Block, MaskIcon, Mono, Page, Rule, Rules, Swatch, SwatchGrid } from './specimens';

/**
 * The brand's own artwork: three logo files, a 16-icon line set, one caret,
 * yellow line art and documentary photography. Nothing else — no icon font, no
 * CDN library, no emoji, no unicode glyphs standing in for icons.
 */
const meta = {
  title: 'Theme/Brand',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Everything shown here ships in `public/`. Before adding an icon or an illustration, ' +
          'look in `public/svg/_icons` and `public/svg` — the set is small on purpose.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const ICONS = [
  { file: 'icon_01_3-bars', name: 'bars' },
  { file: 'icon_02_heart', name: 'heart' },
  { file: 'icon_03_montain', name: 'mountain' },
  { file: 'icon_04_care', name: 'care' },
  { file: 'icon_05_search', name: 'search' },
  { file: 'icon_06_people', name: 'people' },
  { file: 'icon_07_text', name: 'text' },
  { file: 'icon_08_send', name: 'send' },
  { file: 'icon_09_location', name: 'location' },
  { file: 'icon_10_home', name: 'home' },
  { file: 'icon_11_calendar', name: 'calendar' },
  { file: 'icon_12_camera', name: 'camera' },
  { file: 'icon_13_play', name: 'play' },
  { file: 'icon_14_market', name: 'market' },
  { file: 'icon_15_sun', name: 'sun' },
  { file: 'icon_16_internet', name: 'internet' },
];

const LOGOS = [
  { src: '/svg/mamut-logo-branco.svg', name: 'mamut-logo-branco.svg', note: 'wordmark', width: 180 },
  {
    src: '/svg/Mamut%20treeking-logo-branco.svg',
    name: 'Mamut treeking-logo-branco.svg',
    note: 'full lockup — note the historical “treeking” spelling',
    width: 180,
  },
];

export const Logos: Story = {
  render: () => (
    <Page>
      <Block
        title="Files and inversion"
        hint="All logo artwork is white. `.theme-logo` darkens it on light surfaces instead of shipping a second file."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {(['light', 'dark'] as const).map((theme) => (
            <div
              key={theme}
              data-theme={theme}
              className="flex flex-col gap-6 rounded-panel border border-line bg-surface p-7"
            >
              <Mono className="text-content-muted">data-theme=&quot;{theme}&quot;</Mono>
              {LOGOS.map((logo) => (
                <div key={logo.name} className="flex flex-col gap-2">
                  <Image
                    src={logo.src}
                    alt="Mamut Trekking"
                    width={logo.width}
                    height={40}
                    unoptimized
                    className="theme-logo h-9 w-auto"
                  />
                  <Mono className="text-content-muted">{logo.name}</Mono>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Block>

      <Block
        title="Outline mammoth"
        hint="Yellow artwork — it keeps its colour in both themes, so it never takes `.theme-logo`."
      >
        <div className="flex flex-wrap items-center gap-8 rounded-panel bg-surface-inverse p-8">
          <Image
            src="/svg/mamut-logo_outline_yellow.svg"
            alt="Mamut Trekking"
            width={120}
            height={120}
            unoptimized
            className="h-24 w-auto"
          />
          <Mono className="text-on-media">mamut-logo_outline_yellow.svg</Mono>
        </div>
      </Block>
    </Page>
  ),
};

/**
 * The 16 line icons are rendered as CSS masks, which is what lets them inherit
 * `color` — the same technique as `CaretDownIcon`. Thin, single-weight,
 * geometric strokes.
 */
export const IconSet: Story = {
  name: 'Icon set',
  render: () => (
    <Page>
      <Block
        title="16 icons"
        hint="public/svg/_icons — mask-based, so a chip, a footer link and a button all tint them from the surrounding text colour."
      >
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-8">
          {ICONS.map(({ file, name }) => (
            <div key={file} className="flex flex-col items-center gap-2 text-center">
              <span className="grid size-16 place-items-center rounded-card border border-line bg-surface-muted text-content">
                <MaskIcon src={`/svg/_icons/${file}.svg`} className="size-8" />
              </span>
              <Mono>{name}</Mono>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-6 rounded-panel bg-brand p-6 text-brand-contrast">
          <MaskIcon src="/svg/_icons/icon_03_montain.svg" className="size-8" />
          <MaskIcon src="/svg/_icons/icon_09_location.svg" className="size-8" />
          <MaskIcon src="/svg/_icons/icon_11_calendar.svg" className="size-8" />
          <Text as="span" size="sm">
            Same files over the green fill — the mask takes `currentColor`.
          </Text>
        </div>
        <Rules>
          <Rule tone="do">
            Check <Mono>public/svg/_icons</Mono> and <Mono>public/svg/figma</Mono> before drawing
            anything new.
          </Rule>
          <Rule tone="dont">No icon font, no CDN library, no emoji, no unicode glyphs as icons.</Rule>
        </Rules>
      </Block>
    </Page>
  ),
};

/**
 * One leaf shape, rotated for every direction. It belongs inside circular
 * controls, card corners and carousel arrows — never a second arrow drawing.
 * The stemmed arrow is a separate mark, used only beside CTA text.
 */
export const Caret: Story = {
  render: () => (
    <Page>
      <Block title="The directional mark">
        <div className="flex flex-wrap items-center gap-8">
          {[
            { label: 'down', rotation: '' },
            { label: 'left', rotation: 'rotate-90' },
            { label: 'up', rotation: 'rotate-180' },
            { label: 'right', rotation: '-rotate-90' },
          ].map(({ label, rotation }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="grid size-16 place-items-center rounded-card border border-line bg-surface-muted">
                <CaretDownIcon className={`size-6 ${rotation}`} />
              </span>
              <Mono>{label}</Mono>
            </div>
          ))}
        </div>
      </Block>

      <Block
        title="In circular controls"
        hint="Carousel arrows and card corners: the caret inside `IconButton`, one variant per surface."
      >
        <div className="flex flex-wrap items-center gap-4">
          <IconButton label="Mostrar roteiro anterior" variant="outline">
            <CaretDownIcon className="size-4 rotate-90" />
          </IconButton>
          <IconButton label="Mostrar próximo roteiro" variant="primary">
            <CaretDownIcon className="size-4 -rotate-90" />
          </IconButton>
        </div>
        <div className="flex flex-wrap items-center gap-4 rounded-panel bg-surface-inverse p-8">
          <IconButton label="Mostrar roteiro anterior" variant="outlineOnMedia">
            <CaretDownIcon className="size-4 rotate-90" />
          </IconButton>
          <IconButton label="Explorar a trilha" variant="solidOnMedia">
            <CaretDownIcon className="size-4 -rotate-90" />
          </IconButton>
        </div>
      </Block>

      <Block
        title="The other arrow"
        hint="The stemmed arrow lives beside CTA text and nudges 2px on hover. It never replaces the caret inside a circular control."
      >
        <div className="flex flex-wrap items-center gap-6">
          <Button arrow>Escolha a sua trilha</Button>
          <ArrowRightIcon className="size-4 text-content" />
        </div>
      </Block>
    </Page>
  ),
};

/** Yellow line art and the crowd illustration — the only non-photographic art. */
export const LineArt: Story = {
  name: 'Line art',
  render: () => (
    <Page>
      <Block
        title="Ancestral yellow"
        hint="Illustration and small details only. It is never a CTA fill and never a text colour on a light surface."
      >
        <SwatchGrid>
          <Swatch
            name="bg-accent-line-art"
            className="bg-accent-line-art"
            note="#f7cd45 · same value in both themes"
          />
        </SwatchGrid>
        <div className="flex flex-col gap-6 rounded-panel bg-surface-inverse p-8">
          {[
            { src: '/svg/humans-assets-yellow.svg', name: 'humans-assets-yellow.svg' },
            {
              src: '/svg/session-05_backgroud-people-01.svg',
              name: 'session-05_backgroud-people-01.svg',
            },
          ].map(({ src, name }) => (
            <div key={name} className="flex flex-col gap-2">
              <Image src={src} alt="" width={720} height={180} unoptimized className="w-full" />
              <Mono className="text-on-media-muted">{name}</Mono>
            </div>
          ))}
        </div>
      </Block>
    </Page>
  ),
};

/**
 * Real documentary photography of the Chapada: wide, natural, editorially
 * cropped, always `object-fit: cover` with an explicit `object-position`.
 */
export const Photography: Story = {
  render: () => (
    <Page>
      <Block
        title="Framing"
        hint="Same file, three `object-position` values. Crop by moving the frame, never by shipping a second file or squashing the aspect."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {['center 20%', 'center 50%', 'center 80%'].map((position) => (
            <MediaCard
              key={position}
              image={{
                src: '/img/home_backgroud/home_backgroud_01_no_crop_1x.webp',
                alt: '',
                position,
              }}
              overlay="none"
              radius="card"
              className="h-45 shadow-image-outline"
              contentLayer="fill"
              contentClassName="flex items-end p-4"
            >
              <Mono className="text-on-media">{position}</Mono>
            </MediaCard>
          ))}
        </div>
      </Block>

      <Block
        title="Black and white is a state, not a treatment"
        hint="The guide cards crossfade the colour photo to a black-and-white twin on hover. Hover the card."
      >
        <div className="group relative h-96 w-72 overflow-hidden rounded-card-lg bg-surface-sunken shadow-image-outline">
          <Image
            src="/img/session_04_cabral_foto_01.webp"
            alt="Marcelo Cabral, guia e fundador"
            fill
            sizes="288px"
            className="object-cover transition-opacity duration-300 ease-brand group-hover:opacity-0"
          />
          <Image
            src="/img/session_04_cabral_foto_01_bw.webp"
            alt=""
            fill
            sizes="288px"
            className="object-cover opacity-0 transition-opacity duration-300 ease-brand group-hover:opacity-100"
          />
        </div>
        <Rules>
          <Rule tone="do">
            Warm high-altitude daylight, green vegetation against grey-ochre rock, no filters and no
            heavy grain.
          </Rule>
          <Rule tone="dont">
            No stock photography standing in for a missing asset — leave the `Placeholder` marker so
            the gap stays visible.
          </Rule>
        </Rules>
      </Block>
    </Page>
  ),
};
