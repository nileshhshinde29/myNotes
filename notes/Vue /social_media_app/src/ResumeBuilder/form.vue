<template>
    <div>
        <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-6">
                <label for="validationCustom01" class="form-label">First name</label>
                <input type="text" class="form-control" v-model="formData.FirstName" id="validationCustom01" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationCustom02" class="form-label">Last name</label>
                <input type="text" class="form-control" v-model="formData.LastName" id="validationCustom02" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-12">
                <label for="validationCustom03" class="form-label">Objective</label>
                <input type="text" class="form-control" v-model="formData.Objective" id="validationCustom03" required>
                <div class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationCustom03" class="form-label">Address</label>
                <input type="text" class="form-control" v-model="formData.Address" id="validationCustom03" required>
                <div class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div class="col-md-6">
                <label for=" validationCustom04" class="form-label">Gender</label>
                <select class="form-select" v-model="formData.gender" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div class="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <div class="col-md-12">
                <label for="validationCustom03" class="form-label">Educational Details</label>
                <input type="text" v-model="formData.EducationalDetails" class="form-control" id="validationCustom03"
                    required>
                <div class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div class="col-md-12">
                <label for="validationCustom03" class="form-label">Skills</label>
                <input v-for="(item, index) in formData?.Skills" :key="index" type="text" v-model="formData.Skills[index]"
                    class="form-control" id="validationCustom03" required>
                <button type="button" class="btn-secondary btn" @click="() => formData.Skills.push('')">+ Add Skill</button>
                <div class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationCustom03" class="form-label">Other Activities</label>
                <input v-for="(item, index) in formData?.OtherActivities" :key="index" type="text"
                    v-model="formData.OtherActivities[index]" class="form-control" id="validationCustom03" required>
                <button type="button" class="btn-secondary btn" @click="() => formData.OtherActivities.push('')">+ Add
                    Activity</button>
                <div class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input v-model="formData.openToWork" class="form-check-input" type="checkbox" value="" id="invalidCheck"
                        required>
                    <label class="form-check-label" for="invalidCheck">
                        Open to work
                    </label>
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" @click="(e) => { e.preventDefault(), console.log(formData) }">Submit
                    form</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'foRm',
    data() {
        return {
            formData: {
                FirstName: '',
                LastName: '',
                Objective: '',
                Address: '',
                gender: '',
                EducationalDetails: '',
                Skills: [''],
                OtherActivities: [''],
                openToWork: false
            }
        }
    }
}
</script>
<style></style>