import { Footer } from '@/components/footer/Footer';
import { Menu } from '@/components/menu/Menu';
import { AdvantagesContainer } from '@/containers/trusted-facility/AdvantagesContainer';
import { ArrangingLeaseGuideContainer } from '@/containers/trusted-facility/ArrangingLeaseGuideContainer';
import { BenefitsContainer } from '@/containers/trusted-facility/BenefitsContainer';
import { IntroductoryContainer } from '@/containers/trusted-facility/IntroductoryContainer';
import { LeasingConditionsContainer } from '@/containers/trusted-facility/LeasingConditionsContainer';
import { TrustedFacilityFaqContainer } from '@/containers/trusted-facility/TrustedFacilityFaqContainer';
import { TrustedFacilityFormContainer } from '@/containers/trusted-facility/TrustedFacilityFormContainer';
import { VehiclesContainer } from '@/containers/trusted-facility/VehiclesContainer';
import { ZoneOfWorkContainer } from '@/containers/trusted-facility/ZoneOfWorkContainer';
import { trustedFacilitySitemap } from '@/shared/sitemaps';
import { createFileRoute } from '@tanstack/react-router'
import clsx from 'clsx';

export const TrustedFacility = () => {
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
                        <VehiclesContainer />
                        <AdvantagesContainer />
                        <ArrangingLeaseGuideContainer />
                        <LeasingConditionsContainer />
                        <ZoneOfWorkContainer />
                        <TrustedFacilityFaqContainer />
                        <TrustedFacilityFormContainer />
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

export const Route = createFileRoute('/trusted-facility/')({
  component: TrustedFacility,
})