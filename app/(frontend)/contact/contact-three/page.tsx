import HeroContact from '@/app/components/sections/contact/herocontact';
import SendAMessage from '@/app/components/sections/contact/sendamessage';
import ContactWhyWeAre from '@/app/components/sections/contact/whyweare';

import React from 'react';

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <section>
      <HeroContact />
      <SendAMessage />
      <ContactWhyWeAre />
    </section>
  );
};

export default ContactPage;
