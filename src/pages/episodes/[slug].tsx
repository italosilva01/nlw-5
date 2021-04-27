import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { api } from "../../services";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { convertDurationToTimeString } from "../../utils/ConvertDurationToTimeString";

interface Episode {
  id: string;
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  description: string;
  durationAsString: string;
  url: string;
  publishedAt: string;
}

interface EpisodesProps {
  episode: Episode;
}

export default function Episode({ episode }: EpisodesProps) {
  const router = useRouter();

  return <h1>{episode.title}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const { data } = await api.get(`/episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), "d MMM yy", {
      locale: ptBR,
    }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url,
  };

  return {
    props: {},
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
