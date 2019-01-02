// This is the Link API
import Link from 'next/link';
import * as React from 'react';
import { Page, TextStyle } from '@shopify/polaris';

const Index = () =>
  (
    <Page
      title={'test'}
      primaryAction={{
        content: 'My Stuff',
      }}>

      <Link href="/about" >
        <a style={{ fontSize: 20 }}>this is a link</a>
      </Link>

      <TextStyle variation="positive">
        <p>Hello Next.js</p>
      </TextStyle>
    </Page>
  )

export default Index
