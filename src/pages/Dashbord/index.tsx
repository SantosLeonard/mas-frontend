import { useState } from 'react';
import { Header } from "../../components/Header";
import { ActivityTable } from '../../components/ActivityTable';
import { Summary } from '../../components/Summary';
import { NewactivityModal } from '../../components/NewActivityModal';
import {NewCourseUnitModal} from '../../components/NewCourseUnitModal';

import {Container} from './styles'

export function Dashboard() {

    const [isNewActivityModalOpen, setIsNewActivityModalOpen] = useState(false)
    const [isNewCourseUnitModalOpen, setIsNewCourseUnitModalOpen] = useState(false)


    function handleOpenActivityModal(){
        setIsNewActivityModalOpen(true);
    }

    function handleCloseActivityModal(){
        setIsNewActivityModalOpen(false);
    }

    function handleOpenCourseUnitModal(){
        setIsNewCourseUnitModalOpen(true);
    }

    function handleCloseCourseUnitModal(){
        setIsNewCourseUnitModalOpen(false);
    }


    return (
        <>
            <Header 
                onOpenNewactivityModal={handleOpenActivityModal} 
                onOpenNewCourseUnitModal={handleOpenCourseUnitModal}
            />
            <Container>
                <Summary />
                <ActivityTable />
            </Container>
            <NewactivityModal 
                isOpen={isNewActivityModalOpen}
                onRequestClose={handleCloseActivityModal}
            />
            <NewCourseUnitModal 
                isOpen={isNewCourseUnitModalOpen}
                onRequestClose={handleCloseCourseUnitModal}
            />
        </>
    )
}