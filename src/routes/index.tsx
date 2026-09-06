import { createFileRoute } from '@tanstack/react-router'
import { IntroductoryContainer } from '@/containers/home/IntroductoryContainer';
import { CompaniesSliderContainer } from '@/containers/home/CompaniesSliderContainer';
import clsx from 'clsx';
import { CollaborationContainer } from '@/containers/home/CollaborationContainer';
import { LaboratoryControlContainer } from '@/containers/home/LaboratoryControlContainer';
import { ProducingAsphaltContainer } from '@/containers/home/ProducingAsphaltContainer';
import { RentEquipmentContainer } from '@/containers/home/RentEquipmentContainer';
import { TurnkeyAsphaltingForm } from '@/components/forms/TurnkeyAsphaltingForm';
import { TurnkeyAsphaltingContainer } from '@/containers/home/TurnkeyAsphaltingContainer';
import { ContactsContainer } from '@/containers/home/ContactsContainer';
import { Footer } from '@/components/footer/Footer';
import { homeSitemap } from '@/shared/sitemaps';
import { Menu } from '@/components/menu/Menu';

export const Home = () => {
    return (
        <div>
            <Menu menuSitemap={homeSitemap} />
            <div className={clsx(
                'flex flex-col gap-16 md:gap-36'
            )}>
                <div className={clsx(
                    'flex flex-col gap-16 md:gap-24'
                )}>
                    <div className={clsx(
                        'flex flex-col gap-8 md:gap-12'
                    )}>
                        <IntroductoryContainer />
                        <CompaniesSliderContainer />
                        <CollaborationContainer />
                        <LaboratoryControlContainer />
                    </div>
                    <ProducingAsphaltContainer />
                </div>
                <div className={clsx(
                    'flex flex-col gap-16 md:gap-24'
                )}>
                    <RentEquipmentContainer />
                    <div className={clsx(
                        'flex flex-col gap-8 md:gap-12'
                    )}>
                        <TurnkeyAsphaltingContainer />
                        <TurnkeyAsphaltingForm />
                        <ContactsContainer />
                        <Footer footerSitemap={homeSitemap} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Route = createFileRoute('/')({
    component: Home,
})