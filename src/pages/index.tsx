import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Context from '../context/Context';
import { ButtonPrimary } from '../emotion/Button';
import Layout from '../components/Layout/Layout';
import { SiteQuery } from '../interfaces';
import { ModalVariant } from '../enums/Index';
import Copy from '../json/copy.json';

const IndexPage: React.FC = () => {
  const { site } = useStaticQuery<SiteQuery>(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Context.Consumer>
      {({ toggleModal }) => (
        <Layout pageTitle={site.siteMetadata.title}>
          <ButtonPrimary onClick={() => toggleModal(ModalVariant.ADD_ITEM)}>
            {Copy.addItem}
          </ButtonPrimary>
        </Layout>
      )}
    </Context.Consumer>
  );
};

export default IndexPage;
