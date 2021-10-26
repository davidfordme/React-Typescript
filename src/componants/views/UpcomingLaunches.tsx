import '../../media/scss/views/UpcomingLaunches.scss';

import React, { useEffect } from 'react';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { useGlobalContext } from '../../Context';

const UpcomingLaunches = () => {
    const { isLoading, setLoading } = useGlobalContext();

    let launches:any = null;

    useEffect(() => {
        setLoading(true)

        const client = new ApolloClient({
            uri: 'https://api.spacex.land/graphql/',
            cache: new InMemoryCache()
        });
        
        console.log('go fetch launches');

        client
            .query({
                query: gql`
                query {
                    launchesUpcoming(limit: 10) {
                      mission_name
                      rocket {
                        rocket {
                          id
                          name
                          wikipedia
                          type
                        }
                      }
                      mission_id
                    }
                  }
                  
                `
            })
            .then(result => {
                console.log(result);

                setTimeout(() => {
                    setLoading(false)
                    launches = result;
                }, 2000);
            });
    }, [launches]);

    return(
        <div className="upcomingLaunches">
          <nav></nav>
        </div>
    )
}

export default UpcomingLaunches;