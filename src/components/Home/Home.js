import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTrucks, getTrucksStatus } from '../../redux/features/trucksSlice';

import './Home.css';

const Home = () => {
    const dispatch = useDispatch();

    const trucksStatus = useSelector(getTrucksStatus);

    useEffect(() => {
        if (trucksStatus === 'idle') {
            dispatch(fetchTrucks());
        }
    }, [trucksStatus, dispatch])

    return (
        <section className='home-wrapper'>
            <article className='home-title-wrapper'>
                <h1 className='home-title'>world with endless roads</h1>
                <h1 className='home-title'>feel the freedom</h1>
            </article>
            <article className='home-content-wrapper'>
                <div className='home-content-img-wrapper'>
                    <img src="./images/offroadbg2.jpg" alt="monster-truck" />
                </div>
                <div className='home-content'>
                    <h2 className='home-content-tile'>we know</h2>
                    <p className='home-content-text'>
                        Off-roading is the activity of driving or riding in a vehicle on unpaved surfaces such
                        as sand, gravel, riverbeds, mud, snow, rocks, and other natural terrain. Types of off-roading
                        range in intensity, from leisure drives with unmodified vehicles, to competitions with
                        customized vehicles and professional drivers. Off-roaders have been met with criticism for
                        the environmental damage caused by their vehicles.There have also been extensive debates over
                        the role of government in regulating the sport, including a Supreme Court case brought against
                        the Bureau of Land Management in the United States.
                    </p>
                </div>
            </article>
            <article className='home-content-wrapper'>
                <div className='home-content'>
                    <h2 className='home-content-tile'>we believe</h2>
                    <p className='home-content-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id pariatur
                        sequi reiciendis tenetur quaerat! Sapiente deserunt animi blanditiis error? Officiis expedita saepe odit
                        adipisci officia. Quo ut vel, consequuntur, eligendi quidem vero sint explicabo qui dolore cum dolores?
                        Perferendis corporis illo culpa laborum. Architecto, perferendis! Eum alias, quis ex dignissimos rem,
                        laboriosam molestiae magnam, quam totam doloremque illum distinctio! Aspernatur rem placeat voluptas sit!
                        Eum alias, quis ex dignissimos rem,laboriosam molestiae magnam, quam totam doloremque illum distinctio!
                    </p>
                </div>
                <div className='home-content-img-wrapper'>
                    <img src="./images/of6.jpg" alt="monster-truck" />
                </div>
            </article>

        </section>
    )
}
export default Home;