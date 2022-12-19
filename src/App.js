import React from 'react';
import Navbar from './components/Navbar';
import Contacts from './components/Contact';
import Job from './components/Job';
import Course from './components/Course.js'
import Language from './components/Language.js'
import Education from './components/Education.js'

import contactsData from './data/contacts.js'
import experiencesData from './data/jobExperiences.js'
import coursesData from './data/courses.js'
import languagesData from './data/languages.js'
import educationData from './data/education.js'

export default function App() {

    const [isShown, setShown] = React.useState(false)

    const contacts = contactsData.map(contact => {
        return(
            <Contacts
                key={contact.id}
                id={contact.id}
                name={contact.name}
                value={contact.value}
            />
        )
    })

    const experiences = experiencesData.map(experience => {
        return (
            <Job 
                key={experience.id}
                name={experience.name}
                company={experience.company}
                startDate={experience.startDate}
                endDate={experience.endDate}
                location={experience.location}
                skills={experience.skills}
                description={experience.description}
            />
        )
    })

    const courses = coursesData.map(course => {
        return (
            <Course 
                key={course.id}
                id={course.id}
                name={course.name}
                company={course.company}
                date={course.date}
                hasCertificate={course.hasCertificate}
                certificateURL={course.certificateURL}
                isShown={isShown}
            />
        )
    })

    const languages = languagesData.map(language => {
        return (
            <Language 
                key={language.id}
                id={language.name}
                language={language.language}
                level={language.level}
            />
        )
    })

    const education = educationData.map(education => {
        return (
            <Education 
                key={education.id}
                name={education.name}
                university={education.university}
                degree={education.degree}
                startDate={education.startDate}
                endDate={education.endDate}
                description={education.description}
                location={education.location}
            />
        )
    })


    function handleOnClick() {
        setShown(prevShown => !prevShown)
    }

    return (
        <div>
            <Navbar />
            <h4 className='col-12 margin-bottom'>CONTACT ME</h4>
            <section className="app-contacts">
                {contacts}
            </section>
            <hr />

            <h4 className='col-12 margin-bottom'>EDUCATION</h4>
            <section className="wrap">
                {education}
            </section>
            <hr />

            <h4 className='col-12 margin-bottom'>PROFESSIONAL EXPERIENCE</h4>
            <section className="wrap">
                {experiences}
            </section>
            <hr />

            <h4 className='col-12 margin-bottom app-courses'>COURSES AND CERTIFICATIONS
                <button className="btn btn-secondary btn-sm" onClick={handleOnClick}>{isShown ? 'Hide' : 'Show'} certificates</button>
            </h4>
            {courses}
            <hr />

            <h4 className='col-12 margin-bottom'>LANGUAGES</h4>
            <section className="app-contacts">
                {languages}
            </section>
            <hr />
        </div>
    )
}