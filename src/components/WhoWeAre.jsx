import React from 'react'

const WhoWeAre = () => {
    return (
        <div id='About' style={{ background: 'rgba(66,165,245,.1)', border: '5px solid  #0dcaf0', borderRadius: '10px', display: 'flex', justifyContent: 'center' }}>
            <section style={{background: '#f8f9fa', borderRadius: '10px', width: '80%',  margin: '50px'}}>
                <h2 style={{fontSize: '40px', marginLeft: '5%'}}>Our Passionate Journey</h2>
                <p style={{marginLeft: '5%', marginRight: '5%', fontWeight: '400', fontSize: '20px',wordBreak: 'break-word', wordWrap: 'break-word', fontFamily: 'Manrope, sans-serif'}}>
                    Welcome to Revive, where we don’t just fix cars; we breathe life back into them! Our homemade business is fueled by a love for all things automotive, especially when it comes to interiors that have seen better days. If your car’s interior looks like it survived a tornado, you’ve come to the right place!
                    <br />
                    <br />
                    We specialize in transforming the sad, worn-out interiors of cars into stunning spaces that make you feel like you’re driving a luxury vehicle. From upholstery repairs to complete interior overhauls, we’ve got the skills and the passion to make your ride feel brand new again. Why settle for mediocre when you can have extraordinary?
                    <br />
                    <br />
                    Join us on this wild ride as we take your car from drab to fab! With our quirky charm and expert craftsmanship, we promise to deliver results that will leave you grinning from ear to ear. So buckle up, because your car’s transformation is just a click away!
                </p>
                <img src="https://r.mobirisesite.com/697320/assets/images/photo-1558382689-c1c29cc9b37e.jpeg" style={{borderRadius: '1rem', display: 'block', width: '100%'}}/>
            </section>
        </div>
    )
}
export default WhoWeAre
