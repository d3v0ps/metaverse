
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useState } from 'react';

const sections = [
  {
    name: 'Portal',
    items: [
      {
        name: 'API Docs',
        url: 'compodoc/portal',
      },
      {
        name: 'Storybook',
        url: 'compodoc/portal',
      },
    ]
  },
  {
    name: 'Core',
    items: [
      {
        name: 'API Docs',
        url: 'compodoc/core',
      },
    ]
  },
  {
    name: 'GateKeeper',
    items: [
      {
        name: 'API Docs',
        url: 'compodoc/gatekeeper',
      },
    ]
  },
  {
    name: 'Web Components',
    items: [
      {
        name: 'API Docs',
        url: 'compodoc/web-components',
      },
    ]
  }
]


function Developers() {
  const { siteConfig = {} } = useDocusaurusContext();
  const [ activePage, setActivePage ] = useState(sections[0].items[0]);

  return (
    <Layout
      title={`Developers`}
      description="Description will go into a meta tag in <head />"
    >
      <div style={{ width: "95vw", margin: "0 auto" }}>
        <div className="row">
          <div className="col col--2">
            <nav class="menu thin-scrollbar menu_node_modules-@docusaurus-theme-classic-lib-next-theme-DocSidebar-styles-module">
              <ul class="theme-doc-sidebar-menu menu__list">
                {sections.map((section, idx) => (
                  <li key={idx} class="theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item">
                    <a class="menu__link" href="#">{section.name}</a>
                    <ul class="menu__list" style={{ display: "block", overflow: "visible", height: "auto" }}>
                      {section.items.map((sectionItem, idx) => (
                        <li class="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item">
                          <a class="menu__link" href="#" tabindex="0" onClick={() => setActivePage(sectionItem)}>{sectionItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col col--10">
            <iframe style={{ width: "100%", height: "calc(100vh - 328px)"}} src={useBaseUrl(activePage.url)}></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );

}

export default Developers;
