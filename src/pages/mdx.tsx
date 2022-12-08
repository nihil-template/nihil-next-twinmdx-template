import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';
import { getMDX } from '@/utils/MDX';
import { ISlug } from '@/types';

interface IMDXPageProps {
  post: ISlug;
}

const MDXPage = ({ post, }: IMDXPageProps) => {
  const { source, } = post;

  const Div = tw.div`flex flex-row items-center justify-center`;

  const HomeLink = tw(Link)`inline-block mt-5 p-5 bg-black-700/60 text-white text-2xl mx-auto hover:bg-black-800`;

  return (
    <>
      <div>
        <MDXRemote {...source} />
      </div>
      <Div>
        <HomeLink href='/' passHref>홈으로 돌아가기</HomeLink>
      </Div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const post = await getMDX('test');

  return {
    props: {
      post,
    },
  };
};

export default MDXPage;
