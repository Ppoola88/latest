import { test, expect } from '@playwright/test';
import { PolicyHolderPage} from '../../../pages/MediAndDental/policyHolderMediAndDentPage';
import { HealthPartners as fakehealthPartners } from '../../../Fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000);
test('Policyholder medi and dent test', async ({ page }) => {
  const policyHolderPage = new PolicyHolderPage(page);
  
    await policyHolderPage.navigateToWelcomePage();
    //await expect(page).toHaveURL('http://hpmssiat1:8180/hp/shopping/anonymous.html?#welcome');
await expect(page).toHaveURL('https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await policyHolderPage.clickGetStartedLink();
    await policyHolderPage.SeeIfYouQualify();
    await policyHolderPage.saveAndContinue();
    await policyHolderPage.fillZipCode('55413');
    //await expect(page).toHaveURL("http://hpmssiat1:8180/hp/shopping/anonymous.html?#view/account/WhosCoveredSE/Demographics");
await expect(page).toHaveURL("https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await policyHolderPage.fillFirstName();
    await policyHolderPage.fillLastName(fakeValue.lastNameLocator);
    await policyHolderPage.fillBirthDate('02/16/1987');
    await policyHolderPage.selectGender(fakeValue.genderLocator);
    await policyHolderPage.selectSmokerOption(fakeValue.smokerLocator);
    await policyHolderPage.clickContinueLink();
    await policyHolderPage.selectBrowseAllPlans();
    await policyHolderPage.addToCart();
    await policyHolderPage.viewCartAndEnroll();
    await policyHolderPage.addDentalPlan();
    await policyHolderPage.enrollNow();
    await policyHolderPage.fillEmailAddress();
    await policyHolderPage.userIDAndPassword(fakeValue.userIdLocator);
    await policyHolderPage.securityQuestionAndBroker(fakeValue.answerLocator);
    await policyHolderPage.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator, fakeValue.SSN);
    await policyHolderPage.previousHealthPlan();
    await policyHolderPage.uploadFile();
    await policyHolderPage.paymentOptions(fakeValue.lastNameLocator);
    await policyHolderPage.verifySubmission();
    await policyHolderPage.submitForm(fakeValue.lastNameLocator);
    await policyHolderPage.applnSubmitted();
    await policyHolderPage.enrollmentSummary();
    await policyHolderPage.startDentalEnrollment();
    await policyHolderPage.applicationInfo(fakeValue.addressLocator,fakeValue.cityLocator, fakeValue.phoneLocator, fakeValue.SSN);
    await policyHolderPage.currentMedicalInfo(fakeValue.insName)
    await policyHolderPage.currentPreviousDentIns();
    await policyHolderPage.autoPayDentalPlan(fakeValue.lastNameLocator);
    await policyHolderPage.confirmYourAppln();
    await policyHolderPage.submitFormforPrimary(fakeValue.lastNameLocator);
    await policyHolderPage.gotoAccount();
    // await policyHolderPage.MyInfo();


});
