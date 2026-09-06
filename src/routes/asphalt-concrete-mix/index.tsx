import { AsphaltConcreteMixFaq } from '@/components/asphalt-concrete-mix/AsphaltConcreteMixFaq';
import { AdvantagesContainer } from '@/containers/asphalt-concrete-mix/AdvantagesContainer';
import { AsphaltConcreteMixFaqContainer } from '@/containers/asphalt-concrete-mix/AsphaltConcreteMixFaqContainer';
import { AsphaltConcreteMixFormContainer } from '@/containers/asphalt-concrete-mix/AsphaltConcreteMixFormContainer';
import { BenefitsContainer } from '@/containers/asphalt-concrete-mix/BenefitsContainer';
import { DeliveryContainer } from '@/containers/asphalt-concrete-mix/DeliveryContainer';
import { DeliveryDurationContainer } from '@/containers/asphalt-concrete-mix/DeliveryDurationContainer';
import { IntroductoryContainer } from '@/containers/asphalt-concrete-mix/IntroductoryContainer';
import { MixtureListContainer } from '@/containers/asphalt-concrete-mix/MixtureListContainer';
import { PlacingOrderGuideContainer } from '@/containers/asphalt-concrete-mix/PlacingOrderGuideContainer';
import { Footer } from '@/components/footer/Footer';
import { createFileRoute } from '@tanstack/react-router'
import clsx from 'clsx';
import { Menu } from '@/components/menu/Menu';
import { asphaltConcreteMixSitemap, homeSitemap } from '@/shared/sitemaps';

export const AsphaltConcreteMix = () => {
    return (
        <div>
            <Menu menuSitemap={asphaltConcreteMixSitemap} />
            <div className={clsx(
                'flex flex-col gap-4 md:gap-8'
            )}>
                <div className={clsx(
                    'flex flex-col gap-16 md:gap-24'
                )}>
                    <div className={clsx(
                        'flex flex-col gap-12'
                    )}>
                        <IntroductoryContainer />
                        <BenefitsContainer /> 
                        <MixtureListContainer />
                        <AdvantagesContainer />
                        <DeliveryContainer />
                        <DeliveryDurationContainer />
                        <PlacingOrderGuideContainer />
                        <AsphaltConcreteMixFaqContainer />
                        <AsphaltConcreteMixFormContainer />
                    </div>
                </div>
                <div className={clsx(
                    'flex flex-col gap-16 md:gap-24'
                )}>
                    <div className={clsx(
                        'flex flex-col gap-8 md:gap-12'
                    )}>
                        <Footer footerSitemap={asphaltConcreteMixSitemap} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Route = createFileRoute('/asphalt-concrete-mix/')({
  component: AsphaltConcreteMix,
})