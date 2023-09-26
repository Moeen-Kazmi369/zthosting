import Choose_ZThosting from '@/components/Home/Choose_ZThosting';
import FAQs from '@/components/promo/FAQs';
import Banner_Section from '@/components/wordpress/Banner_Section';
import Plans_Section from '@/components/wordpress/Plans_Section';
import React from 'react'

const Page = () => {
  return (
    <>
    <Banner_Section/>
    <Plans_Section/>
    <Choose_ZThosting/>
    <FAQs/>
    </>
  )
}

export default Page;