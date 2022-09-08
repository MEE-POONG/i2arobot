import Head from 'next/head';

import IndexPage from "components/layouts/IndexPage";

import { useRecoilState, useSetRecoilState } from 'recoil';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react'

import { Card, Container, Form, Button } from 'react-bootstrap';
export default function Home() {
  const router = useRouter();
  return (
    < >
      <Head>
        <title>HOME | PSD PARTNER ONLINE</title>
        <meta
          name="description"
          content="Login to your PSD PARTNER ONLINE account"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className='login'>
        <Card>
          <Card.Body>
            ssssssfffa
          </Card.Body>
          <Card.Footer>
          </Card.Footer>
        </Card>
      </Container >
    </ >
  );
}
Home.layout = IndexPage;