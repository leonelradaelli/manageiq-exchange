require 'rails_helper'

RSpec.describe 'V1::Spins', type: :request do

  context 'v1' do
    let(:prefix) { 'v1' }

    describe '#GET when spin is not found' do
      it 'all spins when there is none' do
        get "/#{prefix}/spins"
        expect(Spin.count).to eq(0)
        expect(response).to have_http_status(:no_content)
      end

      it 'one spin by wrong id' do
        get "/#{prefix}/spins/3232"
        expect(Spin.count).to eq(0)
        expect(response).to have_http_status(:not_found)
      end
    end

    describe '#GET existing spins' do
      let!(:spin) { FactoryBot.create(:spin) }
      let!(:user) { FactoryBot.create(:user) }
      let!(:spin_galaxy) { FactoryBot.create(:spin, name: "galaxy",user: user) }
      let!(:spin_content) { FactoryBot.create(:spin, name: "content",user: user) }

      it 'all spins' do
        get "/#{prefix}/spins"
        expect(response).to have_http_status(200)
        expect(json).to be_kind_of(Array)
        expect(json.length).to eq(3)
        expect(json[0]['name']).to eq(spin.name)
      end

      it 'all spins of an existing user' do
        get "/#{prefix}/users/#{user.github_login}/spins"
        expect(response).to have_http_status(200)
        expect(json).to be_kind_of(Array)
        expect(json.length).to eq(2)
      end

      it 'one spin of a user by name' do
        get "/#{prefix}/users/#{user.github_login}/spins/#{spin_galaxy.name}"
        expect(response).to have_http_status(200)
        expect(json).to be_kind_of(Hash)
        expect(json['name']).to eq(spin_galaxy.name)
      end

      it 'one spin of a user by id' do
        get "/#{prefix}/users/#{user.github_login}/spins/#{spin_content.id}"
        expect(response).to have_http_status(200)
        expect(json).to be_kind_of(Hash)
        expect(json['name']).to eq(spin_content.name)
      end

      pending 'search for spins of a user'
      pending 'search when there is no user'

      it 'spins with query' do
        get "/#{prefix}/spins?query=galaxy"
        expect(response).to have_http_status(200)
        expect(json).to be_kind_of(Array)
        expect(json.length).to eq(1)
        get "/#{prefix}/spins?query=sample"
        expect(response).to have_http_status(204)
      end
    end
  end
end