import { Footer } from '@/components/footer/Footer';
import { Menu } from '@/components/menu/Menu';
import { AsphaltAnyObjectsContainer } from '@/containers/complex-asphalting/AsphaltAnyObjectsContainer';
import { FullAsphaltCycleContainer } from '@/containers/complex-asphalting/FullAsphaltCycleContainer';
import { IntroductoryContainer } from '@/containers/complex-asphalting/IntroductoryContainer';
import { AdvantagesContainer } from '@/containers/complex-asphalting/AdvantagesContainer';
import { ArrangingLeaseGuideContainer } from '@/containers/trusted-facility/ArrangingLeaseGuideContainer';
import { BenefitsContainer } from '@/containers/trusted-facility/BenefitsContainer';
import { LeasingConditionsContainer } from '@/containers/trusted-facility/LeasingConditionsContainer';
import { TrustedFacilityFaqContainer } from '@/containers/trusted-facility/TrustedFacilityFaqContainer';
import { TrustedFacilityFormContainer } from '@/containers/trusted-facility/TrustedFacilityFormContainer';
import { VehiclesContainer } from '@/containers/trusted-facility/VehiclesContainer';
import { ZoneOfWorkContainer } from '@/containers/trusted-facility/ZoneOfWorkContainer';
import { trustedFacilitySitemap } from '@/shared/sitemaps';
import { createFileRoute } from '@tanstack/react-router'
import clsx from 'clsx';
import { HowWeWorkContainer } from '@/containers/complex-asphalting/HowWeWorkContainer';
import { CostOfAsphaltingContainer } from '@/containers/complex-asphalting/CostOfAsphaltingContainer';
import { DealineContainer } from '@/containers/complex-asphalting/DeadlineContainer';
import { ConsumersContainer } from '@/containers/complex-asphalting/ConsumersContainer';
import { TrustContainer } from '@/containers/complex-asphalting/TrustContainer';
import { ComplexAsphaltingFaqContainer } from '@/containers/complex-asphalting/ComplexAsphaltingFaqContainer';
import { ComplexAsphaltingFormContainer } from '@/containers/complex-asphalting/ComplexAsphaltingFormContainer';

export const ComplexAsphalting = () => {
    return (
        <div>
            <Menu menuSitemap={trustedFacilitySitemap} />
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
                        <AsphaltAnyObjectsContainer />
                        <FullAsphaltCycleContainer />
                        <AdvantagesContainer />
                        <HowWeWorkContainer />
                        <CostOfAsphaltingContainer />
                        <DealineContainer />
                        <ConsumersContainer />
                        <TrustContainer />
                        <ComplexAsphaltingFaqContainer />
                        <ComplexAsphaltingFormContainer />
                    </div>
                </div>
                <div className={clsx(
                    'flex flex-col gap-16 md:gap-24'
                )}>
                    <div className={clsx(
                        'flex flex-col gap-8 md:gap-12'
                    )}>
                        <Footer footerSitemap={trustedFacilitySitemap} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Route = createFileRoute('/complex-asphalting/')({
  component: ComplexAsphalting,
})