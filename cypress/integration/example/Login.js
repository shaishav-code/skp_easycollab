/// <reference types="cypress" />

describe('my first testsuite',async()=>
{

    it('my login testcase',function()
    {
        cy.visit("https://eros.narola.online:444/EasyCollab/")

        cy.get('#username').type("skp@narola.email")
        cy.get('#inputPassword').type("Sp@9586220030")
        cy.get('#UserRemember').click()
        cy.get('.btn').click()
        // project
        // cy.get(':nth-child(3) > .dropdown-toggle').click()
        // cy.get('.open > .dropdown-menu > li > a').click()
//         // marketing
        // cy.get(':nth-child(4) > .dropdown-toggle').click()
        // cy.get('.open > .dropdown-menu > li > a').click()
//         // badges
//         cy.get(':nth-child(5) > .dropdown-toggle').click()
//         cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()
//         cy.wait(2000)
// //         //-----
//         cy.get('#badgesEmployeeId').select('546')
//         cy.get('#badgesCategory').select('Employee of the month')
//         // calander in contribution==> from
//         cy.get('#from_assign_date').click()
//         cy.get(':nth-child(4) > :nth-child(6) > .ui-state-default').click()
//         // ==>to
//         cy.get('#to_assign_date').click()
//         cy.get(':nth-child(5) > :nth-child(4) > .ui-state-default').click()
//         cy.get('#contri_of').click()
//         cy.get('.btn-success').click()
// //------------
        // cy.get(':nth-child(5) > .dropdown-toggle').click()
        // cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()
//         //-----------
        // cy.get(':nth-child(5) > .dropdown-toggle').click()
        // cy.get('.open > .dropdown-menu > :nth-child(3) > a').click()
        // cy.get('#ScoreTlId').select('546')
        // cy.wait(2000)
        // cy.get('#ScorePmId').select('242')
        // cy.get('#ScoreCategory').select('20')
        // cy.get('#ScoreDescription').type('This is for only testing purpose')
        // cy.get('.btn-white').click()
// //         // support
        // cy.get(':nth-child(6) > .dropdown-toggle').click()
        // cy.get('.open > .dropdown-menu > li > a').click()
        // cy.get('.flo_right > .btn').click()
        // cy.get('#SupportSupportTypeId').select('3')
        // cy.get('#SupportImmediateAttention').click()
        // cy.get('#SupportAttachmentUrl').selectFile('D:/CypressProject/CypressEasycollab/2cf31b28cd2f4ee8933d2bd82dda37e3_page-0001 (1).jpg')
        // cy.get('#SupportNote').type('this is only for testing purpose')
        // cy.get('.btn-white').click() 
//         //timesheet
//         cy.get(':nth-child(7) > .dropdown-toggle').click()
//         cy.get('.open > .dropdown-menu > li > a').click()
//         //cy.get('select').select('option2').should('have.value','option2')
       
//         cy.get('#select_project_chosen > .chosen-single > span').click()
//         cy.wait(2000)
//        cy.get('[data-option-array-index="1"]').click()
//        cy.get('#tshours').type('8')
//        cy.get('#notes').type('This is only for testing purpose')
// // select date and search
// //-----from date
//         cy.get('#fromDate').click()
//         cy.get(':nth-child(3) > :nth-child(5) > .ui-state-default').click()
//         // to  date
//         cy.get('#toDate').click()
//         cy.get('.ui-datepicker-current-day > .ui-state-default').click()
//         cy.get('#projectItemDropbox_chosen > .chosen-single > span').click()
//         cy.get('#projectItemDropbox_chosen > .chosen-drop > .chosen-results > [data-option-array-index="1"]').click()
//         // click on seracg button
//         cy.get('#SearchButton').click()

// //         // library & snacks
        // cy.get(':nth-child(8) > .dropdown-toggle').click()
        // cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()
        // cy.get(':nth-child(8) > .dropdown-toggle').click()
        // cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()
        // cy.get(':nth-child(8) > .dropdown-toggle').click()
        // cy.get('.open > .dropdown-menu > :nth-child(3) > a').click()
        // cy.get(':nth-child(8) > .dropdown-toggle').click()
        // cy.get('.active > .dropdown-menu > :nth-child(4) > a').click()
        // cy.get('#from_date').click()
        // cy.get(':nth-child(3) > :nth-child(3) > .ui-state-default').click()
        // cy.get('#to_date').click()
        // cy.get(':nth-child(4) > :nth-child(2) > .ui-state-default').click()
        // cy.get('#project-button').click()
//  //----------------------
        // cy.get('.navbar-right > .dropdown > .dropdown-toggle').click()
        // cy.get('.navbar-right > .dropdown > .dropdown-menu > :nth-child(2) > a').click()
        // change password negative scenario
//         cy.get('.navbar-right > .dropdown > .dropdown-toggle').click()
//         cy.get('.navbar-right > .dropdown > .dropdown-menu > :nth-child(3) > a').click()
//        cy.get('#UserOldPassword').type('Sp@9586220030')
//        cy.get('#password').type('Sp@9586220030')
//        cy.get('#UserConfirmPassword').type('Sp@9586220030')
//        cy.get('#btn_save').click()
      // change password positive scenario
//       cy.get('.navbar-right > .dropdown > .dropdown-toggle').click()
//       cy.get('.navbar-right > .dropdown > .dropdown-menu > :nth-child(3) > a').click()
//       cy.get('#UserOldPassword').type('Kp@9586220030')
//       cy.get('#password').type('Sp@9586220030')
//       cy.get('#UserConfirmPassword').type('Sp@9586220030')
//       cy.get('#btn_save').click()

// // mail configuration
// cy.get('.navbar-right > .dropdown > .dropdown-toggle').click()
// cy.get('.navbar-right > .dropdown > .dropdown-menu > :nth-child(4) > a').click()
// cy.get('#EmployeeHostName').type('test')
// cy.get('#EmployeePortNo').type('254566')
// cy.get('#EmployeeEmailAdd').type('skp@narola.email')
// cy.get('#EmployeePassword').type('Sp@9586220030')

        //logout
        cy.get('.navbar-right > .dropdown > .dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(5) > a').click()

    })

})