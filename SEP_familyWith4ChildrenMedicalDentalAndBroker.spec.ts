import { test, expect } from '@playwright/test';
import { MedicalAndDentalPage } from '../../../pages/MediAndDental/medicalAndDentalPage';
import { HealthPartners as fakehealthPartners } from '../../../Fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000);
test('Family with 4 children Medi Dent Broker test', async ({ page }) => {
  const  mediDentPage = new MedicalAndDentalPage(page);
    await mediDentPage.navigateToWelcomePage();
    //await expect(page).toHaveURL('http://hpmssiat1:8180/hp/shopping/anonymous.html?#welcome');
await expect(page).toHaveURL('https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await mediDentPage.clickGetStartedLink();
    await mediDentPage.SeeIfYouQualify();
    await mediDentPage.saveAndContinue();
    await mediDentPage.fillZipCode('55413');
    //await expect(page).toHaveURL("http://hpmssiat1:8180/hp/shopping/anonymous.html?#view/account/WhosCoveredSE/Demographics");
await expect(page).toHaveURL("https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await mediDentPage.fillFirstName();
    await mediDentPage.fillLastName(fakeValue.lastNameLocator);
    await mediDentPage.fillBirthDate('02/16/1987');
    await mediDentPage.selectGender(fakeValue.genderLocator);
    await mediDentPage.selectSmokerOption(fakeValue.smokerLocator);
    await mediDentPage.clickAddDependentLink();
    await mediDentPage.fillDependentFirstName(fakeValue.dependentFirstNameLocator);
    await mediDentPage.fillDependentLastName(fakeValue.dependentLastNameLocator);
    await mediDentPage.fillDependentBirthDate('12/18/2001');
    await mediDentPage.selectDependentRelationship(fakeValue.spouseRelationshipLocator);
    await mediDentPage.selectDependentGender(fakeValue.spouseGenderLocator);
    await mediDentPage.selectSmokerOptionForDepandant(fakeValue.spouseSmokerLocator);
    await mediDentPage.clickAddDependentLink1();
    await mediDentPage.clickAddDependentLink2();
    await mediDentPage.clickAddDependentLink3();
    await mediDentPage.clickAddDependentLink4();
    await mediDentPage.clickContinueLink();
    await mediDentPage.selectBrowseAllPlans();
    await mediDentPage.addToCart();
    await mediDentPage.viewCartAndEnroll();
    await mediDentPage.enrollNow();
    await mediDentPage.fillEmailAddress();
    await mediDentPage.userIDAndPassword(fakeValue.userIdLocator);
    await mediDentPage.securityQuestionAndbrokerDetails(fakeValue.answerLocator);
    await mediDentPage.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator, fakeValue.SSN);
    await mediDentPage.familyMembers();
    await mediDentPage.planInformation();
    await mediDentPage.uploadFile();
    await mediDentPage.paymentOptions(fakeValue.lastNameLocator);
    await mediDentPage.verifySubmission();
    await mediDentPage.submitForm(fakeValue.lastNameLocator,fakeValue.dependentFirstNameLocator,fakeValue.dependentLastNameLocator);
    await mediDentPage.applnSubmitted();
    await mediDentPage.enrollmentSummary();
    await mediDentPage.startDentalEnrollment();
    await mediDentPage.applicationInfo(fakeValue.addressLocator,fakeValue.cityLocator, fakeValue.phoneLocator, fakeValue.SSN);
    await mediDentPage.familyInfoDentPlan();
    await mediDentPage.currentMedicalInfo(fakeValue.insName)
    await mediDentPage.currentPreviousDentIns();
    await mediDentPage.autoPayDentalPlan(fakeValue.lastNameLocator);
    await mediDentPage.confirmYourAppln();
    await mediDentPage.submitFormforPrimary(fakeValue.lastNameLocator,fakeValue.dependentFirstNameLocator,fakeValue.dependentLastNameLocator);
    await mediDentPage.gotoAccount();

});
