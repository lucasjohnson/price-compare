import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Context from '../context/Context';
import { ButtonPrimary } from '../emotion/Button';
import Layout from '../components/Layout/Layout';
import { SiteQuery } from '../interfaces';
import { ModalVariant } from '../enums/Index';

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
            Add Item
          </ButtonPrimary>
        </Layout>
      )}
    </Context.Consumer>
  );
};

export default IndexPage;
