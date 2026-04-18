import { createFileRoute } from '@tanstack/react-router'
import { HomeIntroductoryContainer } from '@/containers/HomeIntroductoryContainer';
import { Menu } from '@/components/Menu';
import { CompaniesSliderContainer } from '@/containers/CompaniesSliderContainer';
import clsx from 'clsx';

export const Home = () => {
    return (
        <div>
            <Menu />
            <div className={clsx(
                'flex flex-col gap-8 md:gap-12'
            )}>
                <HomeIntroductoryContainer />
                <CompaniesSliderContainer />
            </div>
        </div>
    );
}

export const Route = createFileRoute('/')({
    component: Home,
})