import StructuredData from '@/components/StructuredData';
import { BRANDING_LOGOS, BRANDING_NAME } from '@/const/branding';
import { ldModule } from '@/server/ld';
import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';
import { isMobileDevice } from '@/utils/server/responsive';

import Actions from './features/Actions';
import Hero from './features/Hero';
import { Switch, Case, ID } from '$utils';
import { Center } from 'react-layout-kit';
import Image from 'next/image';

export const generateMetadata = async () => {
  const { t } = await translation('metadata');
  return metadataModule.generate({
    description: t('welcome.description', { appName: BRANDING_NAME }),
    title: t('welcome.title', { appName: BRANDING_NAME }),
    url: '/welcome',
  });
};

const Page = async () => {
  const mobile = isMobileDevice();
  const { t } = await translation('metadata');
  const ld = ldModule.generate({
    description: t('welcome.description', { appName: BRANDING_NAME }),
    title: t('welcome.title', { appName: BRANDING_NAME }),
    url: '/welcome',
  });

  return (
    <>
      <StructuredData ld={ld} />
      {/* Welcome Logo */}
      <ID tid='welcome-logo'>
        <Switch>
          <Case when={mobile}>
            <Center height={240} width={240}>
              <Image
                alt={BRANDING_NAME}
                height={240}
                src={BRANDING_LOGOS["Full"]}
                unoptimized={true}
                width={240}
              />
            </Center>
          </Case>
          <Case when={!mobile}>
            <Center
              style={{
                height: `min(482px, 40vw)`,
                marginBottom: '-10%',
                marginTop: '-20%',
                position: 'relative',
                width: `min(976px, 80vw)`,
              }}
            >
              <Image
                alt={BRANDING_NAME}
                height={100}
                src={BRANDING_LOGOS["Full"]}
                unoptimized={true}
                width={384}
              />
            </Center>
          </Case>
        </Switch>
      </ID>
      <Hero />
      <Actions mobile={mobile} />
    </>
  );
};

Page.displayName = 'Welcome';

export default Page;
