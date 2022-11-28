import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const Advertise = () => {

    const { data: advertises, isLoading } = useQuery({
        queryKey: ['advertises'],
        queryFn: async () => {
            try {
                const res = fetch(`http://localhost:5000/product/advertise`);
                const data = await (await res).json();
                return data
            }
            catch (error) {

            }
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            {
                advertises?.length > 0 ?

                    <section className='mt-8 p-6'>
                        <h2 className="text-3xl text-center p-4">Advertised Products</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                            {

                                advertises?.map(advertise => <div key={advertise._id} className="card bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={advertise.image} alt="Shoes" className="rounded-xl w-48" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{advertise.name}</h2>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </section>
                    :
                    <></>
            }
        </>
    );
};

export default Advertise;