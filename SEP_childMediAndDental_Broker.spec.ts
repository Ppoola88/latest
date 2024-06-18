import { test, expect } from '@playwright/test';
import { CoupleChildMedicalAndDentalPage } from '../../../pages/MediAndDental/coupleChildMediandDentPage';
import { HealthPartners as fakehealthPartners } from '../../../Fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000);
test('Child Medi Dent Broker test', async ({ page }) => {
  const  mediDentPage = new CoupleChildMedicalAndDentalPage(page);
    await mediDentPage.navigateToWelcomePage();
    //await expect(page).toHaveURL('http://hpmssiat1:8180/hp/shopping/anonymous.html?#welcome');
await expect(page).toHaveURL('https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await mediDentPage.clickGetStartedLink();
    await mediDentPage.SeeIfYouQualify();
    await mediDentPage.child();
    await mediDentPage.saveAndContinue();
    await mediDentPage.fillZipCode('55413');
    //await expect(page).toHaveURL("http://hpmssiat1:8180/hp/shopping/anonymous.html?#view/account/WhosCoveredSE/Demographics");
await expect(page).toHaveURL("https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await mediDentPage.childOnly();
    await mediDentPage.fillCFirstName();
    await mediDentPage.fillCLastName(fakeValue.lastNameLocator);
    await mediDentPage.fillCBirthDate('02/16/2019');
    await mediDentPage.selectCGender(fakeValue.childGenderLocator);
    await mediDentPage.clickContinueLink();
    await mediDentPage.selectBrowseAllPlans();
    await mediDentPage.addToCart();
    await mediDentPage.viewCartAndEnroll();
    await mediDentPage.enrollNow();
    await mediDentPage.fillEmailAddress();
    await mediDentPage.userIDAndPassword(fakeValue.userIdLocator);
    await mediDentPage.securityQuestionAndbrokerDetails(fakeValue.answerLocator);
    await mediDentPage.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator, fakeValue.SSN);
    await mediDentPage.guardianDetailsForOnlyChild(fakeValue.phoneLocator);
    await mediDentPage.enrollmentPageOneSave();
    await mediDentPage.currentPreviousDentIns();
    await mediDentPage.uploadFile();
    await mediDentPage.paymentOptions(fakeValue.lastNameLocator);
    await mediDentPage.verifySubmission();
    await mediDentPage.fillChildAsPholderForm();
    await mediDentPage.submitForm();
    await mediDentPage.applnSubmitted();
    await mediDentPage.enrollmentSummary();
    await mediDentPage.startDentalEnrollment();
    await mediDentPage.applicationInfo(fakeValue.addressLocator,fakeValue.cityLocator, fakeValue.phoneLocator, fakeValue.SSN);
    await mediDentPage.guardianDetailsForOnlyChild(fakeValue.phoneLocator);
    await mediDentPage.enrollmentPageOneSave();
    await mediDentPage.currentMedicalPrimaryInfo(fakeValue.insName);
    await mediDentPage.cureentMediInfoSave();
    await mediDentPage.currentPreviousDentIns();
    await mediDentPage.autoPayDentalPlan(fakeValue.lastNameLocator);
    await mediDentPage.confirmYourAppln();
    await mediDentPage.fillChildAsPholderDentForm();
    await mediDentPage.submitFormDent();
    await mediDentPage.gotoAccount();

});
