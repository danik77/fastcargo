import {useState} from 'react';

import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'next-i18next';
 import CallbackButton from '../src/components/CallbackForm/CallbackButton';


import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import parse from 'html-react-parser';

function htmlToElements(html: any) {
   if (process.browser) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
  }
}

function htmlDecode(input: any){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }



const Information: NextPage = (props) => {

  const { t } = useTranslation('common');


   const [expanded, setExpanded] = useState(false);

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
      <> 
            <div style={{backgroundImage: 'url(/images/cargo3.jpg)'}} className={`${styles.page} ${styles.pageText} ${styles.background}`}>
            <div  className={styles.sliderStyle}></div>

    <div className={`${styles.container} ${styles.containerCentered}`}>
      <main className={styles.main}>
        <h2>{t('info-title')}</h2>
         <p>{t('info-desc')}</p> 
      
      
        <CallbackButton />
      </main>
      </div></div>

      <div className={styles.container}>


      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
         // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
           <h3>{t('info-docs-cargo-title')}</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>{parse(t('info-docs-cargo-desc'))}</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
         /// expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h3>{t('info-docs-route-title')}</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>{parse(t('info-docs-route-desc'))}</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
         /// expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <h3>{t('info-cmr-title')}</h3>
        </AccordionSummary>
        <AccordionDetails>
         <p>{parse(t('info-cmr-desc'))}</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
        ///  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <h3>{t('info-ex-title')}</h3>
        </AccordionSummary>
        <AccordionDetails>
        <p>{t('info-ex-desc')}</p>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
        ///  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <h3>{t('info-t1-title')}</h3>
        </AccordionSummary>
        <AccordionDetails>
       <p>{t('info-t1-desc')}</p>
        </AccordionDetails>
      </Accordion>


   
{/*
<h3>{t('info-docs-cargo-title')}</h3>
<p>{parse(t('info-docs-cargo-desc'))}</p>

<h3>{t('info-docs-route-title')}</h3>
<p>{parse(t('info-docs-route-desc'))}</p>
<h3>{t('info-cmr-title')}</h3>
<p>{parse(t('info-cmr-desc'))}</p>
<h3>{t('info-ex-title')}</h3>
<p>{t('info-ex-desc')}</p>
<h3>{t('info-t1-title')}</h3>
<p>{t('info-t1-desc')}</p>*/}
</div>
 
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "", ['common', 'navigation', 'icons', 'forms'])),
    },
  };
}

export default Information;

//Error: Objects are not valid as a React child (found: [object HTMLParagraphElement]). If you meant to render a collection of children, use an array instead.