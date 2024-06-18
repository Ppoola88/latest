import { test, expect } from '@playwright/test';
// import { Familywith4childrenPage } from '../../pages/familyWith4ChildrenPage';
import { CoupleChildMedicalAndDentalPage } from '../../../pages/MediAndDental/coupleChildMediandDentPage';
import { HealthPartners as fakehealthPartners } from '../../../Fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000);
test('Couple Medi Dent test', async ({ page }) => {
  const  mediDentPage = new CoupleChildMedicalAndDentalPage(page);
    await mediDentPage.navigateToWelcomePage();
    //await expect(page).toHaveURL('http://hpmssiat1:8180/hp/shopping/anonymous.html?#welcome');
await expect(page).toHaveURL('https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await mediDentPage.clickGetStartedLink();
    await mediDentPage.SeeIfYouQualify();
    await mediDentPage.Marriage();
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
    await mediDentPage.clickContinueLink();
    await mediDentPage.selectBrowseAllPlans();
    await mediDentPage.addToCart();
    await mediDentPage.viewCartAndEnroll();
    await mediDentPage.enrollNow();
    await mediDentPage.fillEmailAddress();
    await mediDentPage.userIDAndPassword(fakeValue.userIdLocator);
    await mediDentPage.securityQuestionAndBroker(fakeValue.answerLocator);
    await mediDentPage.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator, fakeValue.SSN);
    await mediDentPage.enrollmentPageOneSave();
    await mediDentPage.familyMembers();
    await mediDentPage.planInformation();
    await mediDentPage.uploadFile();
    await mediDentPage.paymentOptions(fakeValue.lastNameLocator);
    await mediDentPage.verifySubmission();
    await mediDentPage.fillPholderForm(fakeValue.lastNameLocator);
    await mediDentPage.fillDependentForm(fakeValue.dependentFirstNameLocator,fakeValue.dependentLastNameLocator);
    await mediDentPage.submitForm();
    await mediDentPage.applnSubmitted();
    await mediDentPage.enrollmentSummary();
    await mediDentPage.startDentalEnrollment();
    await mediDentPage.applicationInfo(fakeValue.addressLocator,fakeValue.cityLocator, fakeValue.phoneLocator, fakeValue.SSN);
    await mediDentPage.applicationInfoSave();
    await mediDentPage.familyInfoDentPlan();
    await mediDentPage.currentMedicalPrimaryInfo(fakeValue.insName);
    await mediDentPage.currentMedicalDependentInfo(fakeValue.insName);
    await mediDentPage.cureentMediInfoSave();
    await mediDentPage.currentPreviousDentIns();
    await mediDentPage.autoPayDentalPlan(fakeValue.lastNameLocator);
    await mediDentPage.confirmYourAppln();
    await mediDentPage.fillFormforPrimary(fakeValue.lastNameLocator);
    await mediDentPage.fillFormforDependent(fakeValue.dependentFirstNameLocator,fakeValue.dependentLastNameLocator);
    await mediDentPage.submitFormDent();
    await mediDentPage.gotoAccount();

});
