import { createFileRoute } from '@tanstack/react-router'
import { HomeIntroductoryContainer } from '@/containers/HomeIntroductoryContainer';
import { Menu } from '@/components/Menu';
import { CompaniesSliderContainer } from '@/containers/CompaniesSliderContainer';
import clsx from 'clsx';
import { CollaborationContainer } from '@/containers/CollaborationContainer';
import { LaboratoryControlContainer } from '@/containers/LaboratoryControlContainer';
import { ProducingAsphaltContainer } from '@/containers/ProducingAsphaltContainer';
import { RentEquipmentContainer } from '@/containers/RentEquipmentContainer';
import { TurnkeyAsphaltingForm } from '@/components/TurnkeyAsphaltingForm';
import { TurnkeyAsphaltingContainer } from '@/containers/TurnkeyAsphaltingContainer';
import { ContactsContainer } from '@/containers/ContactsContainer';
import { Footer } from '@/containers/Footer';

export const Home = () => {
    return (
        <div>
            <Menu />
            <div className={clsx(
                'flex flex-col gap-16 md:gap-36'
            )}>
                <div className={clsx(
                    'flex flex-col gap-16 md:gap-24'
                )}>
                    <div className={clsx(
                        'flex flex-col gap-8 md:gap-12'
                    )}>
                        <HomeIntroductoryContainer />
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
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Route = createFileRoute('/')({
    component: Home,
})