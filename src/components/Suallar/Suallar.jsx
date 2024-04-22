import React from 'react'
import './Suallar.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Suallar = () => {
  return (
    <div className='faq-sec1'>
      <div className='faq-sec'>
        <div className='faq'>FAQ</div>
        <div className='bexsis'>Sizi Maraqlandıran Suallara Cavablar</div>
      </div>
      <div className='sual'>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography className='nedir'>Kofe.al nədir?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='type'>
              Kofe.al, pərəstişkarlarınızdan
              birbaşa gəlir əldə etməyiniz
              üçün ən sadə yoldur. Siz bəxşi
              şlər qəbul edə, üzvlük səviyyə
              ləri yarada, onlayn mağaza aça
              və 9% platforma haqqı ilə
              komissiya ala bilərsiniz.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='nedir'>Kofe.al kimlər üçündür?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='type'>
              Sənətkarlar, Rəssamlar, Streamerlər,
              Podkastçılar, Yazıçılar, Fotoqraflar,
              Kinorejissorlar, İnfluencerlər və hər
              cür yaradıcı şəxslər Kofe.al-dan ist
              ifadə edirlər.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='nedir'>Ödənişi necə alacağam?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='type'>
              Bəxşiş ödənişləri növbəti gün sizin
              bank kartınıza köçürüləcək. Məhsul
              və xidmət satışından əldə edilən gə
              lirlər isə VÖEN-li bank hesabınıza
              köçürülür. Bu qədər sadə!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='nedir'>Xidmət haqqı nə qədərdir?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='type'>
              Biz bütün əməliyyat haqları və
              komissiyamız daxil olmaqla 9% komissiya alırıq.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='nedir'>Ödənilən vəsaitlər ilə kofe almalıyam?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='type'>
              Təbii ki, yox! Biz qəhvəni sevirik, amma bu,
              sadəcə dostluq metaforasıdır. Sadəcə, işinizi
              dəstəkləmək üçün pərəstişkarlarından "qəhvə almağı"
              xahiş etmək sadəcə "ianə vermək"dən daha bəsitdir.
              Siz həmçinin "qəhvə"ni öz zövqünüzü uyğun başqa
              bir şeyə dəyişə bilərsiniz. Məsələn kofe əvəzinə;
              çay, dönər, hamburger, su və ya pizza istəyə bilərsiniz.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='nedir'>Kofe.al ilə nə qədər qazana bilərəm?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='type'>
              Hər şey sizin izləyici və pərəstişkarlarınız ilə
              münasibət və kommunikasiyadan asılıdır. Kofe.al
              olaraq toplanacaq məbləğə heç bir limit tətbiq
              etmirik. Yetər ki, siz yaradın, paylaşın, satın və qazanın.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='nedir'>Kofe.al xarici analoqlardan fərqi nədir?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='type'>
              Patreon, BMC, Ko-fi kimi xarici analoqlardan əsas
              fərqimiz həm yaradıcı şəxslərn, həm də pərəstişka
              rlar üçün verdiyi üstünlüklər və dil seçimidir.
              Yaradıcı şəxslər xarici analoqlardan ödənişləri
              almaq üçün Azərbaycanda aktiv olmayan PayPal və
              Stripe kimi platformalardan ödənişləri almaq
              məcburiyyətindədilər. Pərəstişkarlar isə xarici
              ödəniş sistemləri ilə ödəniş etdiklərində əlavə
              18% ƏDV vergisi ödəmək məcburiyyətində qaldıqları
              ndan, ödəmələrin miqdarı daha az olur. Kofe.al
              ilə isə əlavə komissiya olmadan, yerli bank kartı
              nıza ödəniş ala bilərsiniz.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='nedir'>Xarici pərəstişkarlarımdan bəs ödəniş ala bilərəm?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='type'>
              Bəli, biz stripe və PayPal ilə də ödənişlər alaraq, sizin
              hesabınıza köçürə bilərik. Hazırda bu xidmət üzərində işlər
              aparılır və komissiya dərəcələri təyin edildikdən sonra, təqdim
              ediləcək.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='nedir'>Kofe.al kimindir?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='type'>
              Kofe.al layihəsi ABŞ-da qeydiyyatdan keçmiş
              BonPara Inc. şirkətinin Azərbaycandakı nüma
              yəndəliyi olan BonPara MMC şirkətinin layihəs
              idir. Komanda və şirkətimiz 500 Global Aksele
              rasiya proqramının məzunu və bir çox startu
              p müsabiqələrin qalibidir.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='nedir'>Sizin xeyriniz nədir?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='type'>
              BonPara olaraq şirkətimiz e-ticarət,
              onlayn ödənişlər və loyallıq proqramı
              üzrə müxtəlif həllər üzərində çalışır.
              Kofe.al bizim ilk sub layihəmizdir.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Suallar